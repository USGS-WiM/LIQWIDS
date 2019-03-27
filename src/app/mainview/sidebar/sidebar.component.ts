import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { MapService } from 'src/app/shared/services/map.service';
import { LoaderService } from '../../shared/services/loader.service';

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
    showBasemaps = false;
    showSiteFilters = true;
    showParameterFilters = true;
    expandSidebar = false;
    public urlParams;
    public urlCharParam;
    public urlSelSites;
    public fromURL = false;
    public filterSelections;

    constructor(private _mapService: MapService, private formBuilder: FormBuilder, private _loaderService: LoaderService) {}

    ngOnInit() {
        this.urlParams = new URLSearchParams(window.location.search);

        // for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ['Nitrate', 'Nitrogen']
        };

        this.defaultParameterFilter = 'Nitrate';

        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter]
        });

        this.urlSelSites = this.urlParams.getAll('sites');
        this.urlCharParam = this.urlParams.getAll('characteristicType');

        // use characteristic sent through in url, otherwise 'Nitrate'
        if (this.urlCharParam.length > 0 && this.urlCharParam[0] !== null) {
            this.parameterDropDownGroup.get('characteristic').setValue(this.urlCharParam);
            this._mapService._characteristicFilterSubject.next(this.urlCharParam);
            this.reQuery();
        } else {
            this.urlParams.set('characteristicType', [this.defaultParameterFilter]);
            this.parameterDropDownGroup.get('characteristic').setValue([this.defaultParameterFilter]);
        }

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

        // this is the main data request
        this._mapService.getData().subscribe(response => {
            console.log(response);

            this.siteFilterData = response;
            this._mapService.addToSitesLayer(this._mapService.geoJson);
            this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;

            // get filters from url params
            this.setFilters();
            this.filterGeoJSON(this.filterSelections);

            // highlights selected sites on map, runs data query and updates url
            if (this.urlSelSites[0] !== null) {this.highlightURLSites(); }
            this.updateQueryParams();
            this._loaderService.hideFullPageLoad();
        });

        // set up filter listeners
        this.onChanges();

        this._mapService.SelectedSite.subscribe((Response) => {
            // updates url if site selected after load
            if (this.urlSelSites[0] !== Response.name) {
                this.urlSelSites = [Response.name];
                this.urlParams.set('sites', [Response.name]);
                this.updateQueryParams();
            }
        });
        this._mapService.MultSelect.subscribe((Response) => {
            // updates url if multiple new sites selected after load
            if (this.urlSelSites.indexOf(Response.name) === -1) {
                this.urlSelSites.push(Response.name);
            }
            for (const site of this.urlSelSites) {
                if (this.urlSelSites[0] === site) {this.urlParams.set('sites', site);
                } else {this.urlParams.append('sites', site); }
            }
            this.updateQueryParams();
        });
    }

    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }

    public setFilters() {
        // change dropdown filters to match url on load
        const self = this;
        this.fromURL = false;
        this.urlParams.forEach(function(value, key) {
            const dropdownKey = self.siteDropDownGroup.get(key);
            let match = true;
            const paramsValue = self.urlParams.getAll(key);
            if (key !== 'characteristicType' && key !== 'sites') {
                if (dropdownKey.value.length !== paramsValue.length) {match = false; }
                for (let i = dropdownKey.value.length; i--;) {
                    if (dropdownKey.value[i] !== paramsValue[i]) {
                        match = false;
                    }
                }
                if (match === false) {
                    self.fromURL = true;
                    dropdownKey.setValue(self.urlParams.getAll(key));
                }
            }
        });
    }

    public highlightURLSites() {
        // highlight sites and send to dataview
        if (this.urlSelSites.length === 1) {
            const jsonIndex = this._mapService.geoJson.features.findIndex(site => {
                return site.properties.name === this.urlSelSites[0];
            });
            this._mapService._selectedSiteSubject.next(this._mapService.geoJson.features[jsonIndex].properties);
            this._mapService.highlightSelectedSite(this._mapService.geoJson.features[jsonIndex]);
        } else if (this.urlSelSites.length > 1 ) {
            this.urlSelSites.forEach(selSite => {
                const jsonIndex = this._mapService.geoJson.features.findIndex(site => {
                    return site.properties.name === selSite;
                });
                this._mapService._selectMultSubject.next(this._mapService.geoJson.features[jsonIndex].properties);
                this._mapService.highlightSelectedSite(this._mapService.geoJson.features[jsonIndex]);
            });
        }
    }

    public updateQueryParams() {
        window.history.replaceState({}, '', decodeURIComponent(`${location.pathname}?${this.urlParams}`));
    }

    private onChanges(): void {
        // requery on wfs data on any parameter filter dropdown change
        this.parameterDropDownGroup.valueChanges.subscribe(selections => {
            this._mapService._characteristicFilterSubject.next(selections.characteristic);
            this.reQuery();
            const self = this;
            // remove all other filters from url if characteristic changed after load
            this.urlParams.forEach(function(value, key) {
                self.urlParams.delete(key);
            });
            for (const char of selections.characteristic) {
                this.urlParams.append('characteristicType', char);
            }
            this.updateQueryParams();
        });

        // on site dropdown change just re-filter geojson
        this.siteDropDownGroup.valueChanges.subscribe(selections => {
            this.filterSelections = selections;
            this.filterGeoJSON(selections);
            if (!this.fromURL) {
                // update url filters if selections made after load
                Object.keys(selections).forEach(key => {
                    this.urlParams.delete(key);
                    if (selections[key].length > 1) {
                        selections[key].forEach(sel => {
                            if (this.urlParams.getAll(key).indexOf(sel) === -1) {
                                this.urlParams.append(key, sel);
                            }
                        });
                    } else if (selections[key].length === 1) {
                        this.urlParams.set(key, selections[key]);
                    } else {
                        this.urlParams.delete(key);
                    }
                });
                // remove selected sites from url
                this.urlParams.delete('sites');
            }
            this.fromURL = false;
            this.updateQueryParams();
        });
    }

    public reQuery(): void {
        // pull values from form
        const characteristic = this.parameterDropDownGroup.get('characteristic').value.join('|');

        // update URL params
        this._mapService.URLparams.SEARCHPARAMS =
            this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;

        // issue new request with updated URL params
        this._mapService.getData().subscribe(response => {
            // repopulate site filter dropdowns
            this.siteFilterData = response;

            // clearForm function clears layer and readds geojson
            this.clearForm();
        });
    }

    public filterGeoJSON(selections: any): void {
        let filterJson;

        // console.log("dropdown changed: ", selections);
        this._mapService.sitesLayer.clearLayers();

        // make copy of geojson
        filterJson = JSON.parse(JSON.stringify(this._mapService.geoJson));
        filterJson.totalFeatures = 0;
        filterJson.features = [];

        // main loop over all features
        this._mapService.geoJson.features.forEach(feature => {
            // assume we have a match for this feature until proven otherwise
            let match = true;

            // need to check if the site matches all the selected values
            for (const selection in selections) {
                // make sure this selection has a value
                if (selections[selection].length > 0) {
                    // check if this feature DOESN'T MATCH the selection
                    if (selections[selection].indexOf(feature.properties[selection]) === -1) {
                        // doesnt meet this selection so set flag to false
                        match = false;
                    }
                }
            }

            // if we still have a match, its a keeper
            if (match) { filterJson.features.push(feature); }
        });

        filterJson.totalFeatures = filterJson.features.length;
        this.geoJSONsiteCount = filterJson.totalFeatures;
        // console.log('new json length',filterJson.totalFeatures);
        this._mapService.addToSitesLayer(filterJson);
    }

    public clearForm(): void {
        // reset values to empty arrays if set
        Object.keys(this.siteDropDownGroup.controls).forEach(key => {
            if (this.siteDropDownGroup.get(key).value.length > 0) { this.siteDropDownGroup.get(key).setValue([]); }
        });

        this._mapService.sitesLayer.clearLayers();

        // set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;
        this._mapService.addToSitesLayer(this._mapService.filterJson);
    }

    // called from basemap button click
    public toggleLayer(newVal: string) {
        this._mapService.chosenBaseLayer = newVal;
        this._mapService.map.removeLayer(this._mapService.baseMaps['OpenStreetMap']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Topo']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Terrain']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Satellite']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Gray']);
        this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
    }
}
