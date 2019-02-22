import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MapService } from 'src/app/shared/services/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public dropDownGroup: FormGroup;
    public allData;

  constructor(private _mapService: MapService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dropDownGroup = this.formBuilder.group({
        huc8: [[]],
        location: [[]],
        name: [[]],
        orgId: [[]],
        orgName: [[]],
        provider: [[]],
        searchType: [[]],
        type: [[]]
    });

    this._mapService.getData().subscribe(response => {
        this.allData = response;
    });

    this.onChanges();
  }

    private onChanges(): void {

    let filterJson;
    
    this.dropDownGroup.valueChanges.subscribe(selections => {
        //console.log("dropdown changed: ", selections);
        this._mapService.sitesLayer.clearLayers();

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
        this._mapService.addToSitesLayer(filterJson);

        })
    }

    public clearForm():void {

        //reset values to empty arrays if set
        Object.keys(this.dropDownGroup.controls).forEach(key => {
            if (this.dropDownGroup.get(key).value.length > 0) this.dropDownGroup.get(key).setValue([])
        });

        this._mapService.sitesLayer.clearLayers();
        //set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this._mapService.addToSitesLayer(this._mapService.filterJson);
    }
    
    //called from basemap button click
    public toggleLayer(newVal: string){
      this._mapService.chosenBaseLayer = newVal;
      this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
      this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
      this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
      this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
      this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]); 
      this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
  }

  showBasemaps = true;
  showFilters = true;
  expandSidebar = false;

}
