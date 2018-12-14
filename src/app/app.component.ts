import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public map: any;

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

    L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
            layers: "wqp_sites",
            format: "image/png",
            transparent: true,
            searchparams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
            
        }).addTo(this.map);
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
