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
    this._mapService.nwisLayer = L.featureGroup().addTo(this._mapService.map);

    //add legend
    this._mapService.legend = new L.Control({position: 'bottomright'});

    this._mapService.legend.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend');
      var item = '<i class="wqx-site"></i>WQX Sites';
      div.innerHTML = item;
      return div;
    };
  
    this._mapService.legend.addTo(this._mapService.map);

    ///NOT FINISHED
    this._mapService.map.on('load moveend zoomend', (e) => {

      //console.log('here',e)
		
        var bbox = this._mapService.map.getBounds().getSouthWest().lng.toFixed(7) + ',' + this._mapService.map.getBounds().getSouthWest().lat.toFixed(7) + ',' + this._mapService.map.getBounds().getNorthEast().lng.toFixed(7) + ',' + this._mapService.map.getBounds().getNorthEast().lat.toFixed(7);

        //this._mapService.queryNWISrtGages(bbox).subscribe(results => console.log('results',results));

    });

  }
}