import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


import * as L from 'leaflet';
import { MapService, Options } from './shared/services/map.service';
import { Ioptions} from "./shared/interfaces/options.interface";
import { NgOnChangesFeature } from '@angular/core/src/render3';
import { timingSafeEqual } from 'crypto';
/* import { LiqwidsService } './shared/services/liqwids.service';  */


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
    public sitesLayer: L.FeatureGroup<any>;
    //private currentLayer: any;

    title = 'LIQWIDS';

    constructor(private _mapService: MapService, private formBuilder: FormBuilder){
        
     }

    ngOnInit(){
        this.dropDownGroup = this.formBuilder.group({
            huc8: '',
            location: '',
            name: '',
            orgId: '',
            orgName: '',
            provider: '',
            searchType: '',
            type: ''
        });

        this.onChanges();
        

        this._mapService.getData().subscribe(response => {
            this.allData = response;
            //add all geojson sites after they've loaded.
            this.addToSitesLayer(this._mapService.geoJson); 
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
        //add the featureGroup w/out data.
        this.sitesLayer = L.featureGroup().addTo(this.map);
    } //END ngOnInit()
    
    private onChanges(): void {
        let filterjson;
        //need to do as a layergroup to clear() and update() json in layers.
        Object.keys(this.dropDownGroup.controls).forEach(key => {
            this.dropDownGroup.get(key).valueChanges.subscribe(val => {
                console.log(key, 'Changed to ', val);
                this.sitesLayer.clearLayers();
                filterjson = this._mapService.updateFilteredSites(key, val);
                this.addToSitesLayer(filterjson);
            })
        })
    }

    public clearForm():void {
        this.dropDownGroup.reset();
        this.sitesLayer.clearLayers();
        //set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this.addToSitesLayer(this._mapService.filterJson);
    }

    public addToSitesLayer(geoJson: any){
        let geojsonMarkerOptions = {
            radius: 5,
            fillColor: '#9b0004',
            weight: 0,
            opacity: 1,
            fillOpacity: 0.5
        };
        L.geoJSON(geoJson, {
            pointToLayer:function(feature, latLng){
                return L.circleMarker(latLng, geojsonMarkerOptions);
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup("<b>Site Name: <b>" + feature.properties.name + "<br/><b>Location Name: <b>" + feature.properties.locName + "<br/><b>Organization Name: <b>" + feature.properties.orgName);
            }
            
        }).addTo(this.sitesLayer);
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
