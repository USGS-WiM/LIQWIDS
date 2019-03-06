import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { MapService } from 'src/app/shared/services/map.service';
import { LoaderService } from '../../shared/services/loader.service';
import { validateConfig } from '@angular/router/src/config';
import { Http } from '@angular/http';
import { DataLoaderComponent } from 'src/app/shared/components/loader/dataloader.component';

@Component({
    selector: 'app-dataview',
    templateUrl: './dataview.component.html',
    styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
    // HighCharts
    public siteChart: any;
    private _siteChartOptions: any;
    public siteChart2: any;
    public typeChart: any;
    private _typeChartOptions: any;
    public orgChart: any;
    public resultCsv;
    public resultJson;
    public filterSelections;
    public characteristics = ['Nitrate'];
    private siteFilterData;
    private geoJSONsiteCount;
    private geojson;
    private showSiteData = false;
    private selectedSite = '';
    private noData = false;
    private unitCodes = [];

    constructor(private _mapService: MapService, private _http: Http, private _loaderService: LoaderService) { }

    ngOnInit() {
        this._mapService.SelectedSite.subscribe((Response) => {
            this.getResultData(Response.name);
        });
        this._mapService.SelectedChar.subscribe((Response) => {
            this.noData = false;
            if (typeof Response === 'string') {this.characteristics = [Response];
            } else {this.characteristics = Response; }
            if (this.characteristics.indexOf('Nitrogen') > -1) {
                this.characteristics.push('Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)');
            }
        });

        this._mapService.SiteChange.subscribe((geojson) => {
            this.geojson = geojson;
            this.geoJSONsiteCount = geojson.features.length;
            this.showSiteData = false; this.noData = false;
            this.getStatData();
        });
        this._siteChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            xAxis: {
                title: {
                    text: 'Activity Start Date'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                labels: {
                    formatter: function() {
                        const date = new Date(this.value);
                        return date.getFullYear();
                    }
                },
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                floating: false,
                borderWidth: 1,
                margin: 5
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x:%Y-%m-%d}<b><br>',
                        pointFormat: '{point.name}',
                        shared: true
                    }
                }
            }
        };
        this.siteChart = new Highcharts.Chart('siteChart', this._siteChartOptions);
        this.siteChart2 = new Highcharts.Chart('siteChart2', this._siteChartOptions);
        this.siteChart.setTitle({text: 'Result Measure Value by Depth'});
        this.siteChart2.setTitle({text: 'Result Measure Value by Measurement Type'});

        this._typeChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie'
            },
            tooltip: {
                pointFormat: '{point.name}: {point.percentage:.1f}'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            }
        };
        this.typeChart = new Highcharts.Chart('typeChart', this._typeChartOptions);
        this.orgChart = new Highcharts.Chart('orgChart', this._typeChartOptions);
        this.typeChart.setTitle({text: 'Sites By Type'});
        this.orgChart.setTitle({text: 'Sites By Organization'});

    } // End NgOnInit

    public getResultData(site) {
        this._loaderService.showDataLoad();
        let resultUrl = 'https://www.waterqualitydata.us/data/Result/search?mimeType=csv&countrycode=US';
        resultUrl += '&siteid=' + site;
        for (const char of this.characteristics) {
            resultUrl += '&characteristicName=' + char;
        }
        this._http.get(resultUrl)
            .subscribe(csv => {
                this.resultCsv = csv; this.resultCsv = this.resultCsv._body;
                this.resultJson = this.csvJSON(this.resultCsv);
                this.resultJson = JSON.parse(this.resultJson);
                this.showSiteData = true; this.noData = false;
                if (this.resultJson.length > 0) {this.createSiteCharts(site);
                } else {this._loaderService.hideDataLoad(); this.noData = true; }
            });
    }

    public csvJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j].replace(/['"]+/g, '');
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    }

    public createSiteCharts(site) {
        while (this.siteChart.series.length > 0) { this.siteChart.series[0].remove(true); }
        while (this.siteChart2.series.length > 0) { this.siteChart2.series[0].remove(true); }
        this.selectedSite = site;
        const depthValues = []; this.unitCodes = [];
        for (let i = 0; i < this.resultJson.length; i++ ) { // creating separate series based on properties
            const currentSite = this.resultJson[i];

            // creating an array of unique depths, each will form own series
            const value = currentSite['ActivityBottomDepthHeightMeasure/MeasureValue'];
            if (value !== '' && depthValues.indexOf(value) === -1) { depthValues.push(value);
            } else if (value === '' && depthValues.indexOf('N/A') === -1) {depthValues.push('N/A'); }

            // creating new series for each characteristic (nitrogen v. nitrate)
            const unit = currentSite['ResultMeasure/MeasureUnitCode'];
            if (unit !== '' && this.unitCodes.indexOf(unit) === -1) { this.unitCodes.push(unit);
            } else if (unit === '' && this.unitCodes.indexOf('N/A') === -1) {this.unitCodes.push('N/A'); }
        }
        // add series for each characteristic unit label
        for (let unit = 0; unit < this.unitCodes.length; unit++) {
            const data = new Array();
            for (let i = 0; i < this.resultJson.length; i++ ) {
                const currentSite = this.resultJson[i];
                const currentValue = currentSite['ResultMeasure/MeasureUnitCode'];
                if (currentValue === this.unitCodes[unit] || (currentValue === '' && this.unitCodes[unit] === 'N/A')) {
                    let resultVal;
                    if (/\d/.test(currentSite.ResultMeasureValue)) {resultVal = Number(currentSite.ResultMeasureValue);
                    } else {resultVal = 0; }
                    let date = currentSite.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    data.push({x: date, y: resultVal, name: resultVal + ' ' + this.unitCodes[unit]});
                }
            }
            this.siteChart2.addSeries({name: this.unitCodes[unit], data: data});
        }

        // add series for each unique depth
        for (let depth = 0; depth < depthValues.length; depth++) {
            const data = new Array();
            for (let i = 0; i < this.resultJson.length; i++ ) {
                const currentSite = this.resultJson[i];
                const currentValue = currentSite['ActivityBottomDepthHeightMeasure/MeasureValue'];
                if (currentValue === depthValues[depth] || (currentValue === '' && depthValues[depth] === 'N/A')) {
                    let resultVal;
                    if (/\d/.test(currentSite.ResultMeasureValue)) {resultVal = Number(currentSite.ResultMeasureValue);
                    } else {resultVal = 0; }
                    let date = currentSite.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    data.push({x: date, y: resultVal, name: resultVal + ' ' + currentSite['ResultMeasure/MeasureUnitCode']});
                }
            }
            this.siteChart.addSeries({name: 'Depth: ' + depthValues[depth], data: data});
        }
        this._loaderService.hideDataLoad();
    }
    public getStatData() {
        while (this.typeChart.series.length > 0) { this.typeChart.series[0].remove(true); }
        while (this.orgChart.series.length > 0) { this.orgChart.series[0].remove(true); }
        this.siteFilterData = this._mapService.filterOptions;

        // site type chart
        const typeData = [];
        this.siteFilterData.searchType.forEach(searchType => {
            const count = this.geojson.features.filter(function(feat) {
                return feat.properties.searchType === searchType;
            }).length;
            if (count > 0) {
                const perc = count / this.geoJSONsiteCount * 100;
                typeData.push({name: searchType, y: perc, sliced: true, selected: true});
            }
        });
        this.typeChart.addSeries({name: 'Site Type Stats', colorByPoint: true, data: typeData});

        // org name chart
        const orgData = [];
        this.siteFilterData.orgName.forEach(orgName => {
            const count = this.geojson.features.filter(function(feat) {
                return feat.properties.orgName === orgName;
            }).length;
            if (count > 0) {
                const perc = count / this.geoJSONsiteCount * 100;
                orgData.push({name: orgName, y: perc, sliced: true, selected: true});
            }
        });
        this.orgChart.addSeries({name: 'Site Organization Stats', colorByPoint: true, data: orgData});
    }

    public downloadFile() {
        const filename = this.selectedSite + '.csv';
        const blob = new Blob([this.resultCsv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(url);
            }
        }
    }

}// END class
