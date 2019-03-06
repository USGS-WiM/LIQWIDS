import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';


import { MapService } from 'src/app/shared/services/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public parameterDropDownGroup: FormGroup;
  public siteDropDownGroup: FormGroup;
  public siteFilterData;
  public parameterFilterData;
  public defaultParameterFilter;
  public geoJSONsiteCount;

  public cities = [];

  constructor(private _mapService: MapService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.cities = [
      {id: 1, name: 'Vilnius'},
      {id: 2, name: 'Kaunas'},
      {id: 3, name: 'Pavilnys', disabled: true},
      {id: 4, name: 'Pabradė'},
      {id: 5, name: 'Klaipėda'}
  ];

    //for now we can keep this a static list but ultimately could pull from here in a service
    // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
    this.parameterFilterData = {
      characteristics: ["Nitrate", "Nitrogen"]
    }

    this.defaultParameterFilter = 'Nitrate';

    this.parameterDropDownGroup = this.formBuilder.group({
      characteristic: [this.defaultParameterFilter]
      //characteristic: [[]]
    });

    this.parameterDropDownGroup.get('characteristic').setValue([this.defaultParameterFilter]);

    this.siteDropDownGroup = this.formBuilder.group({
      huc8: [[]],
      location: [[]],
      name: [[]],
      orgId: [[]],
      orgName: [[]],
      provider: [[]],
      searchType: [[]],
      type: [[]]
    });

    //this is the main data request
    this._mapService.getData().subscribe(response => {

      console.log(response)

      this.siteFilterData = response;
      this._mapService.addToSitesLayer(this._mapService.geoJson);
      this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;
    });

    //set up filter listeners
    this.onChanges();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  private onChanges(): void {

    //requery on wfs data on any parameter filter dropdown change
    this.parameterDropDownGroup.valueChanges.subscribe(selections => {
      this._mapService._characteristicFilterSubject.next(selections.characteristic);
      this.reQuery();
    });

    //on site dropdown change just re-filter geojson
    this.siteDropDownGroup.valueChanges.subscribe(selections => {
      this.filterGeoJSON(selections);
    });

  }

  public reQuery(): void {

    //pull values from form
    let characteristic = this.parameterDropDownGroup.get('characteristic').value.join('|')

    //update URL params
    this._mapService.URLparams.SEARCHPARAMS = this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;

    //issue new request with updated URL params
    this._mapService.getData().subscribe(response => {
      //repopulate site filter dropdowns
      this.siteFilterData = response;

      //clearForm function clears layer and readds geojson
      this.clearForm();
    });
  }

  public filterGeoJSON(selections: any): void {

    let filterJson;

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
    this.geoJSONsiteCount = filterJson.totalFeatures;
    //console.log('new json length',filterJson.totalFeatures);
    this._mapService.addToSitesLayer(filterJson);

  }

  public clearForm(): void {

    //reset values to empty arrays if set
    Object.keys(this.siteDropDownGroup.controls).forEach(key => {
      if (this.siteDropDownGroup.get(key).value.length > 0) this.siteDropDownGroup.get(key).setValue([])
    });

    this._mapService.sitesLayer.clearLayers();

    //set filtergeoJson back to original
    this._mapService.filterJson = this._mapService.geoJson;
    this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;
    this._mapService.addToSitesLayer(this._mapService.filterJson);
  }

  //called from basemap button click
  public toggleLayer(newVal: string) {
    this._mapService.chosenBaseLayer = newVal;
    this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
    this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
    this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
    this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
    this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
    this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
  }

  showBasemaps = false;
  showSiteFilters = true;
  showParameterFilters = true;
  expandSidebar = false;

}
