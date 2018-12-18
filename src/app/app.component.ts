import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JsonPipe } from '@angular/common';

import * as L from 'leaflet';
import { MapService } from './shared/services/map.service';

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
    //private searchParams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047";

    title = 'LIQWIDS';
    
    constructor(private _mapService: MapService){ }
  
    ngOnInit(){

        this.map = L.map("map", {
            center: L.latLng(40.9, -73.0),
            zoom: 9,
            minZoom: 4,
            maxZoom: 19,
            renderer: L.canvas()
        });
        this.baseLayers = this._mapService.baseMaps;
        this.chosenBaseLayer = "Topo";
        this.map.addLayer(this._mapService.baseMaps[this.chosenBaseLayer]);
       
        //typescript complaining about the searchparams option.  Doesn't matter for right now as this isn't the angular way to load anyway.
        this.WQP = L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: "wqp_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2,
                searchParams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
            }).addTo(this.map);

        this.NWIS = L.tileLayer.wms("https://www.waterqualitydata.us/ogcservices/ows?", {
                layers: "qw_portal_map:nwis_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2,
                searchParams: "countycode:US:36:059|US:36:103"
            }).addTo(this.map); 
    }//END NgOnInit

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
