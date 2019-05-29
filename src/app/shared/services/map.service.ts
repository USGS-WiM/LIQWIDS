import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Map } from 'leaflet';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';

declare let L;
import 'leaflet';
import * as esri from 'esri-leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster.freezable';
import { ConfigService } from './config.service';
import { Config } from '../interfaces/config';
import { CustomQueryEncoderHelper } from './customEncoder';

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
    public geoJsonURL;
    private configSettings: Config;

    public URLparams = {
        request: 'GetFeature',
        service: 'wfs',
        version: '2.0.0',
        typeNames: 'wqp_sites',
        SEARCHPARAMS: 'countrycode:US;statecode:US:36;countycode:US:36:059|US:36:103;minresults:1;sampleMedia:Water;characteristicName:Nitrate;',
        outputFormat: 'application/json'
    };

    public sitesLayer: L.FeatureGroup<any>;
    public nwisLayer: L.FeatureGroup<any>;
    public selectedSiteLayer: any;
    // send selected sites/characteristics to dataview
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
    // trigger charts in dataview
    public _siteStatsSubject = new Subject();
    public get SiteStats(): Observable<any> {
        return this._siteStatsSubject.asObservable();
    }

    public _siteChangeSubject = new Subject();
    public get SiteChange(): Observable<any> {
        return this._siteChangeSubject.asObservable();
    }
    // send event year to dataview
    public _eventYearSubject = new Subject();
    public get EventYear(): Observable<any> {
        return this._eventYearSubject.asObservable();
    }

    constructor(private _http: HttpClient, private _loaderService: LoaderService, private _configService: ConfigService) {
        this.configSettings = this._configService.getConfiguration();
        this.geoJsonURL = this.configSettings.geoJsonURL;
        this.chosenBaseLayer = 'Topo';

        this.baseMaps = {
            // {s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
            OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                zIndex: 1,
                attribution:
                    'Imagery from <a href="https://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a>' +
                        '&mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            Topo: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution:
                    'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL,' +
                        'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            }),
            CartoDB: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                zIndex: 1,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; ' +
                        '<a href="https://cartodb.com/attributions">CartoDB</a>'
            }),
            Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution:
                    'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, ' +
                        'and the GIS User Community'
                // maxZoom: 10
            }),
            Terrain: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                maxZoom: 13
            }),
            Gray: L.tileLayer(
                'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
                {
                    zIndex: 1,
                    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                    maxZoom: 16
                }
            ),
            Nautical: esri.imageMapLayer({
                url: 'https://seamlessrnc.nauticalcharts.noaa.gov/arcgis/rest/services/RNC/NOAA_RNC/ImageServer',
                zIndex: 1
            })
        };

        // if typeScript complains about searchParams, add it to the class in the leaflet@types definition
        this.mainLayers = {
            WQP: L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: 'wqp_sites',
                format: 'image/png',
                transparent: true,
                zIndex: 2
                // searchParams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
            }),
            NWIS: L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: 'qw_portal_map:nwis_sites',
                format: 'image/png',
                transparent: true,
                zIndex: 2
                // searchParams: "countycode:US:36:059|US:36:103"
            })
        };
    }

    public getData(): Observable<any> {
        this._loaderService.showFullPageLoad();
        const preparedParams = new HttpParams({
            encoder: new CustomQueryEncoderHelper(),
            fromObject: this.URLparams
        });
        return this._http.get<any>(this.geoJsonURL, { params: preparedParams }).pipe(
            map(response => {
                this.geoJson = response;
                this.filterJson = this.geoJson; // set filtered object to all on init.

                // get unique values for filterOptions
                this.filterOptions = {};
                this.geoJson.features.forEach(feature => {
                    for (const property in feature.properties) {
                        if (!this.filterOptions.hasOwnProperty(property)) {
                            this.filterOptions[property] = [];
                        }
                        if (this.filterOptions[property].indexOf(feature.properties[property]) === -1 && property !== 'bbox') {
                            this.filterOptions[property].push(feature.properties[property]);
                        }
                    }
                });
                return this.filterOptions;
            }),
            catchError((error) => {
                this._loaderService.hideFullPageLoad();
                return this.handleError(error);
            })
        );
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            // client side
            console.error('An error occurred:', err.error.message);
        } else {
            // server error message
            console.error('Server returned code' + err.status + ', ' + err.error.error.message);
        }
        return throwError('HTTPClient error.');
    }

    public addToSitesLayer(geoJson: any) {
        const self = this;
        if (this.markerClusters) {
            this.markerClusters.remove();
        }
        if (this.selectedSiteLayer) {
            this.highlightMarkers.forEach(marker => this.selectedSiteLayer.remove(marker));
        }
        this.highlightMarkers = [];
        const layer = L.geoJSON(geoJson, {
            pointToLayer: function(feature, latLng) {
                const marker = self.setMarker(feature);
                return L.circleMarker(latLng, marker);
            },
            onEachFeature: (feature, lay) => {
                lay.bindPopup(
                    '<b>Site Name: </b>' +
                        feature.properties.name +
                        '<br/><b>Location Name: </b>' +
                        feature.properties.locName +
                        '<br/><b>Organization Name: </b>' +
                        feature.properties.orgName +
                        '<br/><b>Result Count: </b>' +
                        feature.properties.resultCnt
                );
                lay.on('click', function(e) {
                    // check for overlapping sites
                    let locSites = 0;
                    self.geoJson.features.forEach(ft => {
                        const coord = ft.geometry.coordinates;
                        const featCoord = this._latlng;
                        if (coord[0].toFixed(3) === featCoord.lng.toFixed(3) && coord[1].toFixed(3) === featCoord.lat.toFixed(3)) {
                            locSites++;
                        }
                    });
                    if (locSites > 1 && e.target._map._zoom < 15) {
                        e.target
                            .getPopup()
                            .setContent(
                                '<b>Site Name: </b>' +
                                    feature.properties.name +
                                    '<br/><b>Location Name: </b>' +
                                    feature.properties.locName +
                                    '<br/><b>Organization Name: </b>' +
                                    feature.properties.orgName +
                                    '<br/><b>Result Count: </b>' +
                                    feature.properties.resultCnt +
                                    '<br><b style="color: red;">WARNING: overlapping sites here. Zoom in to access individual sites</b>'
                            );
                    }

                    // if site is already selected, just open the popup
                    let run = true;
                    if (self.selectedSiteLayer) {
                        self.selectedSiteLayer.eachLayer(site => {
                            if (site._latlng['lat'] === this._latlng['lat'] && site._latlng['lng'] === this._latlng['lng']) {
                                run = false;
                            }
                        });
                    }
                    if (run) {
                        // control key used to select multiple sites
                        if (!e.originalEvent.ctrlKey) {
                            if (self.selectedSiteLayer) {
                                self.highlightMarkers.forEach(marker => self.selectedSiteLayer.remove(marker));
                            }
                            self.highlightMarkers = [];
                            self.highlightSelectedSite(e);
                            self._selectedSiteSubject.next(e.target.feature.properties);
                        } else {
                            self.highlightSelectedSite(e);
                            self._selectMultSubject.next(e.target.feature.properties);
                        }
                    } else {
                        this.openPopup();
                    }
                });
            }
        }).addTo(this.sitesLayer);

        this.markerClusters = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 0.05,
            spiderfyDistanceMultiplier: 2,
            iconCreateFunction: function(cluster) {
                const children = cluster.getAllChildMarkers();
                const props = new Array();
                for (const child of children) {
                    const prop = child.feature.properties.searchType;
                    if (props.indexOf(prop) === -1) {props.push(prop); }
                }
                if (props.length === 1) {
                    return new L.DivIcon({html: '<div class="' + props[0].toLowerCase() + '"><span>' + cluster.getChildCount() +
                    '</span></div>', className: 'marker-cluster marker-cluster-small border-' + props[0].toLowerCase(),
                    iconSize: new L.Point(4, 4) });
                } else {
                    return new L.DivIcon({html: '<div class="multiple-types"><span>' + cluster.getChildCount() +
                    '</span></div>', className: 'marker-cluster marker-cluster-small border-multiple-types',
                    iconSize: new L.Point(4, 4) });
                }
            }
        });
        this.markerClusters.addLayer(this.sitesLayer);
        this.map.addLayer(this.markerClusters);

        this.markerClusters.disableClustering();

        // zoom
        // If sites layer has only one site, add extra padding
        if (this.geoJson.features.length > 1) {this.map.fitBounds(this.sitesLayer.getBounds(), { padding: [20, 20] });
        } else if (this.geoJson.features.length === 1) {
            this.map.fitBounds(this.sitesLayer.getBounds(), { padding: [0, 0] });
            this.map.setZoom(12);
        }
        this._siteChangeSubject.next(geoJson);
    }

    public highlightSelectedSite(site) {
        const highlightOptions = {
            radius: 4,
            weight: 12,
            opacity: 0.45,
            fill: true,
            color: 'orange',
            fillColor: '#9b0004',
            fillOpacity: 0.5
        };
        if (site.latlng) { this.highlightMarkers.push(L.circleMarker(site.latlng, highlightOptions));
        } else if (site.geometry.coordinates) {
            const latlng = {};
            latlng['lat'] = site.geometry.coordinates[1];
            latlng['lng'] = site.geometry.coordinates[0];
            this.highlightMarkers.push(L.circleMarker(latlng, highlightOptions)); }
        this.selectedSiteLayer = L.featureGroup([]);
        this.highlightMarkers.forEach(marker => marker.addTo(this.selectedSiteLayer));
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
                fillColor = '#3cb44b';
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

    public clearSites() {
        if (this.markerClusters) {
            this.markerClusters.remove();
        }
        if (this.selectedSiteLayer) {
            this.highlightMarkers.forEach(marker => this.selectedSiteLayer.remove(marker));
        }
        this.selectedSiteLayer = L.featureGroup([]);
        this.sitesLayer.clearLayers();
    }

    // use extent to get NWIS rt gages based on bounding box, display on map
    public queryNWISrtGages(bbox: string): Observable<any> {
        const NWISmarkers = {};

        // NWIS query options from http://waterservices.usgs.gov/rest/IV-Test-Tool.html
        const parameterCodeList = '00065,62619,62620,63160,72214';
        const siteTypeList = 'OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS';
        const siteStatus = 'active';
        const url =
            'https://waterservices.usgs.gov/nwis/site/?format=mapper&bBox=' +
            bbox +
            '&parameterCd=' +
            parameterCodeList +
            '&siteType=' +
            siteTypeList +
            '&siteStatus=' +
            siteStatus;

        console.log('here', url);

        return this._http.get(url, { responseType: 'text' }).pipe(
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
