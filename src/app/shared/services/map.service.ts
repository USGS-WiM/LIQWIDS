import { Injectable } from '@angular/core';
//import {Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Map } from 'leaflet';
import * as L from 'leaflet';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Feature } from 'geojson';



/* import { Ioptions } from "../interfaces/options.interface"; */
export interface Options {
    label: string;
    option: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
    private _allsiteView: any;
    public map: Map;
    public baseMaps: any;
    public mainLayers: any;
    public geoJson:any;
    public filterJson: any;
    public filterOptions: any;
    private _geoJsonURL = "https://www.waterqualitydata.us/ogcservices/wfs/?request=GetFeature&service=wfs&version=2.0.0&typeNames=wqp_sites&SEARCHPARAMS=countrycode%3AUS%3Bstatecode%3AUS%3A36%3Bcountycode%3AUS%3A36%3A059%7CUS%3A36%3A103%3BcharacteristicName%3ANitrate&outputFormat=application%2Fjson";
    private _filterData: any;
    //subjects
    private _filteredSiteSubject: BehaviorSubject<any> = <BehaviorSubject<any>> new BehaviorSubject(""); 

    constructor(private _http: HttpClient) { 
        
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
                zIndex: 2,
                //searchParams: "countycode:US:36:059|US:36:103"
            })
        };

        
    }

 /*    //set all sites and keep for resetting later
    public setAllSites(geoJson: any){
        this._allsiteView = geoJson;
    }

    //used to set filtered sites
    public setFilteredSites(geoJson: any){
        this._filteredSiteSubject.next(geoJson);
    }

    /* //use to reset original json
    public get AllSiteView(): Observable<any> {
        return this._allsiteView;
    } */

   /*  public updateFilteredSites(which: string, val:any): any{
       //TODO figure out how to clear if a new filter is selected i.e huc8 --> huc8  

        this._filterData = L.geoJSON(this.filterJson, {
            filter: function(feature) {
                return feature.properties[which] == val;
            }
       })
       this.filterJson = this._filterData.toGeoJSON();
       return this.filterJson;

       
    } */ 
    
/*     public filterChange(which: string, val: any): void {
        console.log('which ', which, ' : ', val);
        
        this.updateFilteredSites(which, val);
        
    } */

    
    public getData(): Observable<any> {
        return this._http.get<any>(this._geoJsonURL)
        .pipe(
            map(response => {
                this.geoJson = response;
                //this._allsiteView = this.geoJson;
                this.filterJson = this.geoJson; // set filtered object to all on init.
                //console.log("AllSiteView", this._allsiteView);
                //add data to geoJson layer to render markers
                //this.mainLayers.GEOJSON.addData(this.geoJson);

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
                //console.log('filterOptions', this.filterOptions);
                return this.filterOptions;
            }),
            catchError(this.handleError)

        )
        
    }

    private handleError(err: HttpErrorResponse){
        if(err.error instanceof ErrorEvent) {
            //client side
            console.error("An error occurred:", err.error.message);
        } else{
            //server error message
            console.error("Server returned code ${err.status, body ${err.error}");
        }
        return throwError("HTTPClient error.");
    }
}
