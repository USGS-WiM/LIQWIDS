import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/shared/services/map.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public map: any;
    public WQP: any;
    public NWIS: any;
    public baseLayers: any;
    public chosenBaseLayer: string;
    public layer:any;
    /* public data: JsonPipe; */
    public filterSearch: Array<string>;
   
    

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this._mapService.getData().subscribe(response => {
        //add all geojson sites after they've loaded.
        this._mapService.addToSitesLayer(this._mapService.geoJson); 
    });

    this.map = L.map("map", {
        center: L.latLng(40.9, -73.0),
        zoom: 9,
        minZoom: 4,
        maxZoom: 19,
        renderer: L.canvas()
    });


    //baseMaps
    this.baseLayers = this._mapService.baseMaps;
    this.chosenBaseLayer = "Topo";
    this.map.addLayer(this._mapService.baseMaps[this.chosenBaseLayer]);
    //main layers
    //add the featureGroup w/out data.
    this._mapService.sitesLayer = L.featureGroup().addTo(this.map);

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
