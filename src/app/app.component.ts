import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as L from 'leaflet';
import * as Highcharts from 'highcharts';
import { MapService } from './shared/services/map.service';
import { DataviewComponent } from "./mainview/dataview/dataview.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
/*     public map: any;
    public WQP: any;
    public NWIS: any;
    public baseLayers: any;
    public chosenBaseLayer: string;
    public layer:any;
    public data: JsonPipe;
    public filterSearch: Array<string>;
    public allData; 
    public dropDownGroup: FormGroup;
    //public sitesLayer: L.FeatureGroup<any>; */

    title = 'LIQWIDS';

    constructor(){   
    }
     
    /* @ViewChild(DataviewComponent) dataviewComponent: DataviewComponent; */

    ngOnInit(){
        //moved to sidebar
        /* this.dropDownGroup = this.formBuilder.group({
            huc8: [[]],
            location: [[]],
            name: [[]],
            orgId: [[]],
            orgName: [[]],
            provider: [[]],
            searchType: [[]],
            type: [[]]
        });

        this.onChanges(); */

        /* this._mapService.getData().subscribe(response => {
            this.allData = response;
            //add all geojson sites after they've loaded.
            this.addToSitesLayer(this._mapService.geoJson); 
        }); */

        /* this.map = L.map("map", {
            center: L.latLng(40.9, -73.0),
            zoom: 9,
            minZoom: 4,
            maxZoom: 19,
            renderer: L.canvas()
        }); */

       /*  //baseMaps
        this.baseLayers = this._mapService.baseMaps;
        this.chosenBaseLayer = "Topo";
        this.map.addLayer(this._mapService.baseMaps[this.chosenBaseLayer]);
        //main layers
        //this.map.addLayer(this._mapService.mainLayers.WQP);
        this.map.addLayer(this._mapService.mainLayers.NWIS);
        //add the featureGroup w/out data.
        this.sitesLayer = L.featureGroup().addTo(this.map); */

       
    } //END ngOnInit()
    
    //in sidebar
    /* private onChanges(): void {

        let filterJson;
        
        this.dropDownGroup.valueChanges.subscribe(selections => {
            //console.log("dropdown changed: ", selections);
            this.sitesLayer.clearLayers();

            //make copy of geojson
            filterJson = JSON.parse(JSON.stringify(this._mapService.geoJson));
            filterJson.totalFeatures = 0;
            filterJson.features = [];

            //main loop over all features
            this._mapService.geoJson.features.forEach(feature => {

              //assume we have a match for this feature until proven otherwise
              var match = true;

              //need to check if the site matches all the selected values
              for (var selection in selections) {

                //make sure this selection has a value
                if (selections[selection].length > 0) {

                  //check if this feature DOESN'T MATCH the selection
                  if (selections[selection].indexOf(feature.properties[selection]) === -1) {
                    //doesnt meet this selection so set flag to false
                    match = false;
                  }
                }
              }

              //if we still have a match, its a keeper
              if (match) filterJson.features.push(feature)

            });

            filterJson.totalFeatures = filterJson.features.length;
            console.log('new json length',filterJson.totalFeatures);
            this.addToSitesLayer(filterJson);

        })
    } */

   /*  public clearForm():void {

        //reset values to empty arrays if set
        Object.keys(this.dropDownGroup.controls).forEach(key => {
            if (this.dropDownGroup.get(key).value.length > 0) this.dropDownGroup.get(key).setValue([])
        });

        this.sitesLayer.clearLayers();
        //set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this.addToSitesLayer(this._mapService.filterJson);
    } */

    /* public addToSitesLayer(geoJson: any){
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
                layer.bindPopup("<b>Site Name: </b>" + feature.properties.name + "<br/><b>Location Name: </b>" + feature.properties.locName + "<br/><b>Organization Name: </b>" + feature.properties.orgName + "<br/><b>Result Count: </b>" + feature.properties.resultCnt);
            }
            
        }).addTo(this.sitesLayer);
    } */
  
    /* //called from basemap button click
    public toggleLayer(newVal: string){
        this.chosenBaseLayer = newVal;
        this.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
        this.map.removeLayer(this._mapService.baseMaps["Topo"]);
        this.map.removeLayer(this._mapService.baseMaps["Terrain"]);
        this.map.removeLayer(this._mapService.baseMaps["Satellite"]);
        this.map.removeLayer(this._mapService.baseMaps["Gray"]); 

        this.map.addLayer(this._mapService.baseMaps[newVal]);
    } */

    /* showBasemaps = true;
    showFilters = true;
    expandSidebar = false; */

}