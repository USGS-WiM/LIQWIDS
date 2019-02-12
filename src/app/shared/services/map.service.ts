import { Injectable } from '@angular/core';
//import {Http, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Map } from 'leaflet';
import * as L from 'leaflet';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Options {
    label: string;
    option: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
    public map: Map;
    public baseMaps: any;
    public mainLayers: any;
    public geoJson:any;
    public filterOptions: any;


    constructor(private _http: HttpClient) { 
        
        this.baseMaps = {// {s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png  
            OpenStreetMap: L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
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
            }),
            //add temporary blank layer, replaced later
            GEOJSON: L.geoJSON(null, {
                pointToLayer: function (feature, latLng) {
                    return L.circleMarker(latLng);
                }
            })
        };

        
    }

    public getData(): Observable<any> {
        return this._http.get<any>("https://www.waterqualitydata.us/ogcservices/wfs/?request=GetFeature&service=wfs&version=2.0.0&typeNames=wqp_sites&SEARCHPARAMS=countrycode%3AUS%3Bstatecode%3AUS%3A36%3Bcountycode%3AUS%3A36%3A059%7CUS%3A36%3A103%3BcharacteristicName%3ANitrate&outputFormat=application%2Fjson")
        .pipe(map(response => {
            this.geoJson = response;
            console.log("geoJson", this.geoJson);


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
            console.log('filterOptions', this.filterOptions);
            return this.filterOptions;
         }))
            

    }
}
