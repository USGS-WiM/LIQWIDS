import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { MapService } from 'src/app/shared/services/map.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ConfigService } from 'src/app/shared/services/config.service';

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
    public defaultMinResults = 1;
    public geoJSONsiteCount;
    showBasemaps = false;
    showSiteFilters = true;
    showParameterFilters = true;
    expandSidebar = false;
    chosenBaseLayer;
    public urlParams;
    public urlCharParam;
    public urlSelSites;
    public urlEventYear;
    public urlMinResults;
    public firstLoad = true;
    public filterSelections;
    private lookups;
    public parameterSelections = {characteristic: [], minResults: 1};

    constructor(private _mapService: MapService, private formBuilder: FormBuilder, private _loaderService: LoaderService,
        private _configService: ConfigService) {
            this.lookups = this._configService.getLookup();
    }

    ngOnInit() {
        this.urlParams = new URLSearchParams(window.location.search);

        // for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ['Ammonia', 'Ammonia and ammonium', 'Ammonia-nitrogen as N', 'Chlorophyll a', 'Dissolved oxygen (DO)',
                'Inorganic nitrogen (nitrate and nitrite)', 'Inorganic nitrogen (nitrate and nitrite) as N', 'Kjeldahl nitrogen' ,
                'Nitrate', 'Nitrate + Nitrite', 'Nitrate as N', 'Nitrogen', 'Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)',
                'Temperature, water', 'Total Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)', 'Total Kjeldahl nitrogen'],
            eventYears: this.getEventYears()
        };

        this.defaultParameterFilter = 'Nitrate';

        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter],
            eventYear: [],
            minResults: 1
        });
        // get selected sites, characteristics and event years if they were sent through the url
        if (this.urlParams.get('site') !== null) {this.urlSelSites = this.urlParams.get('site').split(',');
        } else {this.urlSelSites = []; }
        if (this.urlParams.get('characteristic') !== null) {this.urlCharParam = this.urlParams.get('characteristic').split(',');
        } else {this.urlCharParam = []; }
        if (this.urlParams.get('eventYear') !== null) {this.urlEventYear = this.urlParams.get('eventYear');
        } else {this.urlEventYear = undefined; }
        if (this.urlParams.get('minResults') !== null) {this.urlMinResults = this.urlParams.get('minResults');
        } else {this.urlMinResults = undefined; }

        // use characteristic sent through in url, otherwise 'Nitrate'
        if (this.urlCharParam.length > 0 && this.urlCharParam[0] !== null) {
            this.setURLChar(this.urlCharParam);
        } else {
            this.urlParams.set('characteristic', this.defaultParameterFilter);
            this.updateQueryParams();
            this.parameterDropDownGroup.get('characteristic').setValue([this.defaultParameterFilter]);
            this.parameterSelections.characteristic = [this.defaultParameterFilter];
        }

        // use event years sent through in url
        if (this.urlEventYear) {
            this.parameterDropDownGroup.get('eventYear').setValue(this.urlEventYear);
            this._mapService._eventYearSubject.next(this.urlEventYear);
            this._mapService.URLparams.SEARCHPARAMS += ';startDateLo:01-01-' + this.urlEventYear +
                ';startDateHi:12-31-' + this.urlEventYear;
        }

        // use min results sent through in url, otherwise 1
        if (this.urlMinResults) {
            this.parameterDropDownGroup.get('minResults').setValue(this.urlMinResults);
            this._mapService._minResultsSubject.next(this.urlMinResults);
            this._mapService.URLparams.SEARCHPARAMS += ';minresults:' + this.urlMinResults;
            this.parameterSelections.minResults = this.urlMinResults;
        } else {
            this.parameterDropDownGroup.get('minResults').setValue(this.defaultMinResults);
            this._mapService._minResultsSubject.next(this.defaultMinResults);
            this._mapService.URLparams.SEARCHPARAMS += ';minresults:' + this.defaultMinResults;
        }

        this.siteDropDownGroup = this.formBuilder.group({
            huc8: [[]],
            location: [[]],
            name: [[]],
            orgName: [[]],
            provider: [[]],
            searchType: [[]],
            type: [[]]
        });

        // this is the main data request
        this._mapService.getData().subscribe(response => {
            this.siteFilterData = response;
            this._mapService.colorJson = []; this._mapService.siteCategories = [];
            const self = this;
            // add huc8 names to the sidebar select
            if (this.siteFilterData.huc8) {
                this.siteFilterData.huc8.forEach(function(item, index) {
                    let label;
                    self.lookups.huc8[item] ? label = self.lookups.huc8[item] : label = item;
                    self.siteFilterData.huc8[index] = {val: item, lab: label};
                });
            }
            this._mapService.addToSitesLayer(this._mapService.geoJson);
            this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;

            // get site filters from url params
            this.setFilters();
            // highlights selected sites on map, which triggers data query
            if (this.urlSelSites[0] !== null) {this._mapService.selectSites(this.urlSelSites, true); }
            this._loaderService.hideFullPageLoad();
            this.firstLoad = false;
            this._mapService.updateLegend();
        });

        // set up filter listeners
        this.onChanges();
    }

    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }

    getEventYears() {
        const years = [];
        let startDate = new Date(1932, 0, 1);
        const endDate = new Date();
        while (startDate < endDate) {
            years.push(startDate.getFullYear());
            startDate = new Date(startDate.getFullYear() + 1, 0, 1);
        }
        return years;
    }

    public setFilters() {
        // change dropdown filters to match filters sent through url on load
        Object.keys(this.siteDropDownGroup.controls).forEach(key => {
            const paramKey = this.urlParams.get(key);
            if (paramKey !== null) { this.siteDropDownGroup.get(key).setValue(paramKey.split(',')); }
        });
    }

    public updateQueryParams() {
        window.history.replaceState({}, '', decodeURIComponent(`${location.pathname}?${this.urlParams}`));
    }

    public setURLChar(characteristics) {
        // shortened versions of the characteristic names are used in filter/url, this sends the correct value to the request
        const copyChar = JSON.parse(JSON.stringify(characteristics));
        for (let i = 0; i < copyChar.length; i ++) {
            const char = copyChar[i];
            if (this.lookups.characteristic[char]) {copyChar[i] = this.lookups.characteristic[char]; }
        }
        this.parameterDropDownGroup.get('characteristic').setValue(copyChar);
        this.parameterSelections.characteristic = copyChar;
        this._mapService._characteristicFilterSubject.next(copyChar);
        const characteristic = copyChar.join('|');
        // update search params
        this._mapService.URLparams.SEARCHPARAMS =
            this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;
    }

    public setChar(characteristics) {
        // shortened versions of the characteristic names are used in filter/url, this sends the correct value to the request
        const copyChar = JSON.parse(JSON.stringify(characteristics));
        for (let i = 0; i < copyChar.length; i ++) {
            const char = copyChar[i];
            if (this.lookups.characteristic[char]) {copyChar[i] = this.lookups.characteristic[char]; }
        }
        this.urlParams.set('characteristic', copyChar);
        this._mapService._characteristicFilterSubject.next(characteristics);
        const characteristic = characteristics.join('|');
        // update search params
        this._mapService.URLparams.SEARCHPARAMS =
            this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;
    }

    private onChanges(): void {
        // requery on wfs data on any parameter filter dropdown change
        this.parameterDropDownGroup.valueChanges.subscribe(selections => {
            this.parameterSelections = selections;
        });

        // on site dropdown change just re-filter geojson
        this.siteDropDownGroup.valueChanges.subscribe(selections => {
            // remove selected sites from url
            this.urlParams.delete('site');
            if (!this.firstLoad) {
                // if site filters are changed after load, update the url
                Object.keys(selections).forEach(key => {
                    this.urlParams.delete(key);
                    if (selections[key].length > 0) {
                        this.urlParams.set(key, selections[key].join(','));
                    } else {
                        this.urlParams.delete(key);
                    }
                });
            }
            this.updateQueryParams();
            this.filterSelections = selections;
            this.filterGeoJSON(selections);
        });
    }

    public updateParamFilters(selections) {
        if (selections.characteristic.length === 0) {
            // if no characteristics are selected, clear all map sites, update url, and alert the user
            this.urlParams.delete('characteristic');
            this.updateQueryParams();
            return;
        }
        // reset url params so only characteristic is listed
        this.urlParams = new URLSearchParams([]);
        this.urlParams.set('characteristic', selections.characteristic.join(','));
        this.setChar(selections.characteristic);
        if (!selections.eventYear || selections.eventYear == null) {
            this.urlParams.delete('eventYear');
            this._mapService._eventYearSubject.next();
        } else {
            this.urlParams.set('eventYear', selections.eventYear);
            this._mapService._eventYearSubject.next(selections.eventYear);
            this._mapService.URLparams.SEARCHPARAMS += ';startDateLo:01-01-' + selections.eventYear +
                ';startDateHi:12-31-' + selections.eventYear;
        }

        if (!selections.minResults || selections.minResults == null) {
            this.parameterDropDownGroup.get('minResults').setValue(this.defaultMinResults);
        } else {
            this.urlParams.set('minResults', selections.minResults);
            this._mapService._minResultsSubject.next(selections.minResults);
            this._mapService.URLparams.SEARCHPARAMS += ';minresults:' + selections.minResults;
        }
        this.updateQueryParams();
    }

    public reQuery(): void {
        this._mapService.colorJson = []; this._mapService.siteCategories = []; // empties categories to update symbology
        // send updated parameter filters to dataview when submitted
        this.updateParamFilters(this.parameterSelections);
        // issue new request with updated URL params
        this._mapService.clearSites();
        this._mapService.getData().subscribe(response => {
            // repopulate site filter dropdowns
            this.siteFilterData = response;
            const self = this;
            // add huc8 names to the sidebar select
            if (this.siteFilterData.huc8) {
                this.siteFilterData.huc8.forEach(function(item, index) {
                    let label;
                    self.lookups.huc8[item] ? label = self.lookups.huc8[item] : label = item;
                    self.siteFilterData.huc8[index] = {val: item, lab: label};
                });
            }

            // clearForm function clears layer and readds geojson
            this.clearForm();
            this._loaderService.hideFullPageLoad();
            if (response.length === 0) { this._mapService._siteChangeSubject.next([]); }
            this._mapService.updateLegend();
        });
    }

    public filterGeoJSON(selections: any): void {
        this._mapService.siteCategories = [];
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
        this._mapService.colorJson = filterJson; // if symbolization is changed, it uses the colorJson if not empty
        // console.log('new json length',filterJson.totalFeatures);
        this._mapService.addToSitesLayer(filterJson);
        this._mapService._siteChangeSubject.next(filterJson);
        this._mapService.updateLegend();
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
        this._mapService.map.removeLayer(this._mapService.baseMaps['Nautical']);
        this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
    }
}
