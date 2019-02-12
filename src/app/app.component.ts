import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


import * as L from 'leaflet';
import { MapService, Options } from './shared/services/map.service';

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
    public filterSearch: Array<string>;
    public allData; 
    public dropDownGroup: FormGroup;

    title = 'LIQWIDS';

    constructor(private _mapService: MapService, private formBuilder: FormBuilder){ }

    ngOnInit(){
        this.dropDownGroup = this.formBuilder.group({
            huc8: '',
            type: ''
        });

        this._mapService.getData().subscribe(response => {
            this.allData = response;
            console.log('allData in component:', this.allData)
        });

        

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

        //baseMaps
        this.baseLayers = this._mapService.baseMaps;
        this.chosenBaseLayer = "Topo";
        this.map.addLayer(this._mapService.baseMaps[this.chosenBaseLayer]);
        //main layers
        //this.map.addLayer(this._mapService.mainLayers.WQP);
        this.map.addLayer(this._mapService.mainLayers.NWIS);
        this.map.addLayer(this._mapService.mainLayers.GEOJSON);
       
    
    }
    
    
  
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

    


}
