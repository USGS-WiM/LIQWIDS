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
    public firstLoad = true;
    public filterSelections;
    private lookups;

    constructor(private _mapService: MapService, private formBuilder: FormBuilder, private _loaderService: LoaderService,
        private _configService: ConfigService) {
            this.lookups = this._configService.getLookup();
    }

    ngOnInit() {
        this.urlParams = new URLSearchParams(window.location.search);

        // for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ['Ammonia', 'Ammonia and ammonium', 'Ammonia-nitrogen as N', 'Inorganic nitrogen (nitrate and nitrite)',
                'Inorganic nitrogen (nitrate and nitrite) as N', 'Kjeldahl nitrogen' , 'Nitrate', 'Nitrate + Nitrite', 'Nitrate as N',
                'Nitrogen', 'Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)', 'Total Kjeldahl nitrogen'],
            eventYears: this.getEventYears()
        };

        this.defaultParameterFilter = 'Nitrate';

        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter],
            eventYear: []
        });
        // get selected sites, characteristics and event years if they were sent through the url
        if (this.urlParams.get('site') !== null) {this.urlSelSites = this.urlParams.get('site').split(',');
        } else {this.urlSelSites = []; }
        if (this.urlParams.get('characteristic') !== null) {this.urlCharParam = this.urlParams.get('characteristic').split(',');
        } else {this.urlCharParam = []; }
        if (this.urlParams.get('eventYear') !== null) {this.urlEventYear = this.urlParams.get('eventYear');
        } else {this.urlEventYear = undefined; }

        // use characteristic sent through in url, otherwise 'Nitrate'
        if (this.urlCharParam.length > 0 && this.urlCharParam[0] !== null) {
            this.setURLChar(this.urlCharParam);
        } else {
            this.urlParams.set('characteristic', this.defaultParameterFilter);
            this.updateQueryParams();
            this.parameterDropDownGroup.get('characteristic').setValue([this.defaultParameterFilter]);
        }

        // use event years sent through in url, otherwise 'Nitrate'
        if (this.urlEventYear) {
            this.parameterDropDownGroup.get('eventYear').setValue(this.urlEventYear);
            this._mapService._eventYearSubject.next(this.urlEventYear);
            this._mapService.URLparams.SEARCHPARAMS += ';startDateLo:01-01-' + this.urlEventYear +
                    ';startDateHi:12-31-' + this.urlEventYear;
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
            this._mapService.addToSitesLayer(this._mapService.geoJson);
            this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;

            // get site filters from url params
            this.setFilters();
            // highlights selected sites on map, which triggers data query
            if (this.urlSelSites[0] !== null) {this.highlightURLSites(); }
            this._loaderService.hideFullPageLoad();
            this.firstLoad = false;
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

    public highlightURLSites() {
        // highlight sites and send to dataview
        if (this.urlSelSites.length === 1) { // if only one site sent through URL
            const jsonIndex = this._mapService.geoJson.features.findIndex(site => {
                return site.properties.name === this.urlSelSites[0];
            });
            if (jsonIndex > -1) {
                this._mapService._selectedSiteSubject.next(this._mapService.geoJson.features[jsonIndex].properties);
                this._mapService.highlightSelectedSite(this._mapService.geoJson.features[jsonIndex]);
            }
        } else if (this.urlSelSites.length > 1 ) { // if multiple sites sent through URL
            this.urlSelSites.forEach(selSite => {
                const jsonIndex = this._mapService.geoJson.features.findIndex(site => {
                    return site.properties.name === selSite;
                });
                if (jsonIndex > -1) {
                    this._mapService._selectMultSubject.next(this._mapService.geoJson.features[jsonIndex].properties);
                    this._mapService.highlightSelectedSite(this._mapService.geoJson.features[jsonIndex]);
                }
            });
        }
    }

    public updateQueryParams() {
        window.history.replaceState({}, '', decodeURIComponent(`${location.pathname}?${this.urlParams}`));
    }

    public setURLChar(characteristics) {
        // shortened versions of the characteristic names are used in filter/url, this sends the correct value to the request
        const copyChar = JSON.parse(JSON.stringify(characteristics));
        for (let i = 0; i < copyChar.length; i ++) {
            const char = copyChar[i];
            if (this.lookups[char]) {copyChar[i] = this.lookups[char]; }
        }
        this.parameterDropDownGroup.get('characteristic').setValue(copyChar);
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
            if (this.lookups[char]) {copyChar[i] = this.lookups[char]; }
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
            if (selections.characteristic.length === 0) {
                // if no characteristics are selected, clear all map sites, update url, and alert the user
                this._mapService.clearSites();
                this.urlParams.delete('characteristic');
                this.updateQueryParams();
                this._mapService._characteristicFilterSubject.next(selections.characteristic);
                alert('There are too many sites. A parameter filter must be selected.'); // do this in toast when available?
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
            this.updateQueryParams();
            this.reQuery();
        });

        // on site dropdown change just re-filter geojson
        this.siteDropDownGroup.valueChanges.subscribe(selections => {
            this.filterSelections = selections;
            this.filterGeoJSON(selections);
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
            // remove selected sites from url
            this.urlParams.delete('site');
            this.updateQueryParams();
        });
    }

    public reQuery(): void {
        // issue new request with updated URL params
        this._mapService.getData().subscribe(response => {
            // repopulate site filter dropdowns
            this.siteFilterData = response;

            // clearForm function clears layer and readds geojson
            this.clearForm();
            this._loaderService.hideFullPageLoad();
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
        this._mapService.map.removeLayer(this._mapService.baseMaps['Nautical']);
        this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
    }
}
