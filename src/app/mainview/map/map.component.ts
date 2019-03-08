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
      var item = '<i class="site facility"></i>Facility<br>' +
        '<i class="site atmosphere"></i>Atmosphere<br>' +
        '<i class="site lake"></i>Lake, Reservoir, Impoundment<br>' +
        '<i class="site stream"></i>Stream<br>' +
        '<i class="site well"></i>Well<br>' +
        '<i class="site land"></i>Land<br>' +
        '<i class="site estuary"></i>Estuary<br>' +
        '<i class="site wetland"></i>Wetland<br>' +
        '<i class="site ocean"></i>Ocean';
      div.innerHTML = item;
      return div;
    };
  
    this._mapService.legend.addTo(this._mapService.map);

    ///NOT FINISHED
    this._mapService.map.on('load moveend zoomend', (e) => {

      //console.log('here',e)
		
        var bbox = this._mapService.map.getBounds().getSouthWest().lng.toFixed(7) + ',' + this._mapService.map.getBounds().getSouthWest().lat.toFixed(7) + ',' + this._mapService.map.getBounds().getNorthEast().lng.toFixed(7) + ',' + this._mapService.map.getBounds().getNorthEast().lat.toFixed(7);

        //this._mapService.queryNWISrtGages(bbox).subscribe(results => console.log('results',results));
      if (e.target._zoom >= 16) {
        if (this._mapService.markerClusters) {this._mapService.markerClusters.enableClustering(); }
      } else {
        if (this._mapService.markerClusters) {this._mapService.markerClusters.disableClustering(); }
      }
    });

  }
}
