import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Map } from 'leaflet';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';

declare let L;
import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.freezable';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    public map: Map;
    public legend: any;
    public chosenBaseLayer: string;
    public baseMaps: any;
    public mainLayers: any;
    public geoJson: any;
    public filterJson: any;
    public filterOptions: any;
    public highlightMarkers = [];
    public markerClusters;

    public geoJsonURL = 'https://www.waterqualitydata.us/ogcservices/wfs/';

    public URLparams = {
        request: 'GetFeature',
        service: 'wfs',
        version: '2.0.0',
        typeNames: 'wqp_sites',
        SEARCHPARAMS: 'countrycode:US;statecode:US:36;countycode:US:36:059|US:36:103;characteristicName:Nitrate',
        outputFormat: 'application/json'
    };

    public sitesLayer: L.FeatureGroup<any>;
    public nwisLayer: L.FeatureGroup<any>;
    public selectedSiteLayer: any;
    public _selectedSiteSubject = new Subject();
    public get SelectedSite(): Observable<any> {
        return this._selectedSiteSubject.asObservable();
    }

    public _selectMultSubject = new Subject();
    public get MultSelect(): Observable<any> {
        return this._selectMultSubject.asObservable();
    }

    public _characteristicFilterSubject = new BehaviorSubject('Nitrate');
    public get SelectedChar(): Observable<any> {
        return this._characteristicFilterSubject.asObservable();
    }

    public _siteStatsSubject = new Subject();
    public get SiteStats(): Observable<any> {
        return this._siteStatsSubject.asObservable();
    }

    public _siteChangeSubject = new Subject();
    public get SiteChange(): Observable<any> { return this._siteChangeSubject.asObservable(); }

    constructor(private _http: HttpClient, private _loaderService: LoaderService) {

        this.chosenBaseLayer = "Topo";

        this.baseMaps = {// {s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
            OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                zIndex: 1,
                attribution: 'Imagery from <a href="https://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            Topo: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                zIndex: 1,
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }),
            CartoDB: L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                zIndex:1,
                attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='https://cartodb.com/attributions'>CartoDB</a>"
            }),
            Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                zIndex:1,
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'//,
                //maxZoom: 10
            }),
            Terrain: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                maxZoom: 13
            }),
            Gray: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                maxZoom: 16
            })
        };

        //if typeScript complains about searchParams, add it to the class in the leaflet@types definition
        this.mainLayers = {
            WQP: L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: "wqp_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2,
                //searchParams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
            }),
            NWIS: L.tileLayer.wms("https://www.waterqualitydata.us/ogcservices/ows?", {
                layers: "qw_portal_map:nwis_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2
                //searchParams: "countycode:US:36:059|US:36:103"
            })
        };


    }

    public getData(): Observable<any> {
        this._loaderService.showFullPageLoad();
        return this._http.get<any>(this.geoJsonURL, {params: this.URLparams})
            .pipe(
                map(response => {
                    this.geoJson = response;
                    this.filterJson = this.geoJson; // set filtered object to all on init.

                    //get unique values for filterOptions
                    this.filterOptions = {};
                    this.geoJson.features.forEach(feature => {
                        for (var property in feature.properties){
                            if (!this.filterOptions.hasOwnProperty(property)){
                                this.filterOptions[property] = [];
                            }
                            if (this.filterOptions[property].indexOf(feature.properties[property]) === -1 && property !== 'bbox') {
                                this.filterOptions[property].push(feature.properties[property]);
                            }
                        }
                    })
                    this._loaderService.hideFullPageLoad();
                    return this.filterOptions;
                }),
                catchError(this.handleError)

            )
    }

    private handleError(err: HttpErrorResponse) {
        this._loaderService.hideFullPageLoad();
        if (err.error instanceof ErrorEvent) {
            //client side
            console.error("An error occurred:", err.error.message);
        } else {
            //server error message
            console.error("Server returned code ${err.status, body ${err.error}");
        }
        return throwError("HTTPClient error.");
    }

    public addToSitesLayer(geoJson: any) {
        const self = this;
        if (this.markerClusters) {this.markerClusters.remove(); }
        if (this.selectedSiteLayer) { this.highlightMarkers.forEach((marker) => this.selectedSiteLayer.remove(marker)); }
        this.highlightMarkers = [];
        let layer = L.geoJSON(geoJson, {
            pointToLayer: function (feature, latLng) {
                const marker = self.setMarker(feature);
                return L.circleMarker(latLng, marker);
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup("<b>Site Name: </b>" + feature.properties.name + "<br/><b>Location Name: </b>" + feature.properties.locName + "<br/><b>Organization Name: </b>" + feature.properties.orgName + "<br/><b>Result Count: </b>" + feature.properties.resultCnt);
                layer.on('click', function (e) {
                    let run = true;
                    if (self.selectedSiteLayer) {
                        self.selectedSiteLayer.eachLayer((lay) => { if (lay._latlng === this._latlng) { run = false; } });
                    }
                    if (run === true) {
                        if (self.selectedSiteLayer) { self.highlightMarkers.forEach((marker) => self.selectedSiteLayer.remove(marker)); }
                        self.highlightMarkers = [];
                        self.highlightSelectedSite(e);
                        self._selectedSiteSubject.next(e.target.feature.properties);
                    }
                });
                layer.on('contextmenu', function (e) {
                    this.openPopup();
                    self.highlightSelectedSite(e);
                    self._selectMultSubject.next(e.target.feature.properties);
                });
            }

        }).addTo(this.sitesLayer);

        this.markerClusters = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: .1,
            spiderfyDistanceMultiplier: 2
        });
        this.markerClusters.addLayer(this.sitesLayer);
        this.map.addLayer(this.markerClusters);

        this.markerClusters.disableClustering();

        //zoom
        this.map.fitBounds(this.sitesLayer.getBounds(), {padding:[20,20]});
        this._siteChangeSubject.next(geoJson);
    }

    public highlightSelectedSite(site) {
        const highlightOptions = {
            radius: 4,
            weight: 12,
            opacity: .45,
            fill: true,
            color: 'orange',
            fillColor: '#9b0004',
            fillOpacity: 0.5
        };
        this.highlightMarkers.push(L.circleMarker(site.latlng, highlightOptions));
        this.selectedSiteLayer = L.featureGroup([]);
        this.highlightMarkers.forEach((marker) => marker.addTo(this.selectedSiteLayer));
        this.selectedSiteLayer.addTo(this.map);
        this.selectedSiteLayer.bringToBack();
    }

    public setMarker(feature) {
        let fillColor = '';
        switch (feature.properties.searchType) {
            case 'Facility':
                fillColor = '#555E7B';
                break;
            case 'Atmosphere':
                fillColor = '#B7D968';
                break;
            case 'Lake, Reservoir, Impoundment':
                fillColor = '#B576AD';
                break;
            case 'Stream':
                fillColor = '#4376D3';
                break;
            case 'Well':
                fillColor = '#E04644';
                break;
            case 'Land':
                fillColor = '#1F777F';
                break;
            case 'Estuary':
                fillColor = '#D608A9';
                break;
            case 'Wetland':
                fillColor = '#BEFF82';
                break;
            case 'Ocean':
                fillColor = '#C64C41';
                break;
        }
        return {
            radius: 4,
            fillColor: fillColor,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.5
        };
    }

    //use extent to get NWIS rt gages based on bounding box, display on map
    public queryNWISrtGages(bbox:string): Observable<any> {
        var NWISmarkers = {};

        //NWIS query options from http://waterservices.usgs.gov/rest/IV-Test-Tool.html
        var parameterCodeList = '00065,62619,62620,63160,72214';
        var siteTypeList = 'OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS';
        var siteStatus = 'active';
        var url = 'https://waterservices.usgs.gov/nwis/site/?format=mapper&bBox=' + bbox + '&parameterCd=' + parameterCodeList + '&siteType=' + siteTypeList + '&siteStatus=' + siteStatus;


        console.log('here',url)

        return this._http.get(url,{responseType: 'text'})
            .pipe(
                map(response => {
                    return response;
                })
            );


        // $.ajax({
        //     url: url,
        //     dataType: "xml",
        //     success: function(xml){
        //         $(xml).find('site').each(function(){

        //             var siteID = $(this).attr('sno');
        //             var siteName = $(this).attr('sna');
        //             var lat = $(this).attr('lat');
        //             var lng = $(this).attr('lng');
        //             NWISmarkers[siteID] = L.marker([lat, lng], {icon: nwisMarkerIcon});
        //             NWISmarkers[siteID].data = {siteName:siteName,siteCode:siteID};
        //             NWISmarkers[siteID].data.parameters = {};

        //             //add point to featureGroup
        //             USGSrtGages.addLayer(NWISmarkers[siteID]);

        //             $( "#nwisLoadingAlert" ).fadeOut(2000);
        //         });
        //     },
        //     error : function(xml) {
        //         $( "#nwisLoadingAlert" ).fadeOut(2000);
        //     }
        // });
    }
}
