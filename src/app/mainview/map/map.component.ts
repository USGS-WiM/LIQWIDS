import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/shared/services/map.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //public WQP: any;
   

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this._mapService.getData().subscribe(response => {
        //add all geojson sites after they've loaded.
        this._mapService.addToSitesLayer(this._mapService.geoJson); 
    });

    //init map
    this._mapService.map = L.map("map", {
        center: L.latLng(40.9, -73.0),
        zoom: 9,
        minZoom: 4,
        maxZoom: 19,
        renderer: L.canvas()
    });

    //baseMaps
    this._mapService.map.addLayer(this._mapService.baseMaps[this._mapService.chosenBaseLayer]);

    //add empty feature group
    this._mapService.sitesLayer = L.featureGroup().addTo(this._mapService.map);

  }
}