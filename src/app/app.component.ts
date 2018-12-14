import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LIQWIDS';


  showBasemaps = true;
  showFilters = true;

  expandSidebar = false;

  filterSearchInput = "";
  filterSearch = [
    "One","Two","Three","Four","Five",
    "Six","Seven","Eight","Nine","Ten"
  ]

}
