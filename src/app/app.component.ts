import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

import * as L from 'leaflet';
import { MapService } from './shared/services/map.service';
/* import { LiqwidsService } './shared/services/liqwids.service'; */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public map: any;
    public WQP: any;
    public NWIS: any;
    public baseLayers: any;
    public chosenBaseLayer: string;
    public layer:any;
    private APIUrl: 'https://www.waterqualitydata.us/Codes/characteristicname?text=nitrogen&mimeType=json';
    public data: JsonPipe;

    title = 'LIQWIDS';
    ngOnInit(){
        this.map = L.map("map", {
            center: L.latLng(40.9, -73.0),
            zoom: 9,
            minZoom: 4,
            maxZoom: 19,
            renderer: L.canvas()
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        /* L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
            layers: "wqp_sites",
            format: "image/png",
            transparent: true
            // searchparams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
        }).addTo(this.map); */

        //baseMaps
        this.baseLayers = this._mapService.baseMaps;
        this.chosenBaseLayer = "Topo";
        this.map.addLayer(this._mapService.baseMaps[this.chosenBaseLayer]);
        //main layers
        //this.map.addLayer(this._mapService.mainLayers.WQP);


        //this.map.addLayer(this._mapService.mainLayers.NWIS);

        this.map.addLayer(this._mapService.mainLayers.GEOJSON);
       
    
    }
    
    constructor(private _mapService: MapService){ }

    /* public addGeoJsonLayer(geoJson: any){
        L.geoJSON(this._mapService.geoJson, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng);
            }
       }).addTo(this.map); 
    } */
  
    //called from basemap button click
    public toggleLayer(newVal: string){
        this.chosenBaseLayer = newVal;
        this.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
        this.map.removeLayer(this._mapService.baseMaps["Topo"]);
        this.map.removeLayer(this._mapService.baseMaps["Terrain"]);
        this.map.removeLayer(this._mapService.baseMaps["Satellite"]);
        this.map.removeLayer(this._mapService.baseMaps["Gray"]); 

        this.map.addLayer(this._mapService.baseMaps[newVal]);
    }

    
    showBasemaps = true;
    showFilters = true;

    expandSidebar = false;

    filterSearchInput = "";
    filterSearch = [
        "One","Two","Three","Four","Five",
        "Six","Seven","Eight","Nine","Ten"
    ]


}
