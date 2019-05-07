import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
import * as regression from 'regression';

import { MapService } from 'src/app/shared/services/map.service';
import { LoaderService } from '../../shared/services/loader.service';
import { Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Config } from 'src/app/shared/interfaces/config';

@Component({
    selector: 'app-dataview',
    templateUrl: './dataview.component.html',
    styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
    // HighCharts
    private _siteChartOptions: any;
    public typeChart: any;
    private _typeChartOptions: any;
    public orgChart: any;
    public resultCsv;
    public resultJson;
    public queryChar = 'Nitrate';
    public charTypes = [];
    private siteFilterData;
    private geoJSONsiteCount;
    private geojson;
    public showSiteData = false;
    public selectedSites = [];
    public noData = false;
    public noGraphData = false;
    public dataLoading = false;
    private selectedChar;
    private fractionTypes = ['Dissolved', 'Total', ''];
    public showModal = false;
    public urlParams;
    public urlSites;
    public subscription;
    public charsWithSites = [];
    private configSettings: Config;
    public resultParams = {
        mimeType: 'csv',
        zip: 'no',
        minactivities: 1
    };

    constructor(private _mapService: MapService, private _http: Http, private _loaderService: LoaderService,
        private _configService: ConfigService) {
            this.configSettings = this._configService.getConfiguration();
     }

    ngOnInit() {
        this._mapService.SelectedSite.subscribe((Response) => {
            // subscriber for map click, updates url params and queries site's result data
            this.charsWithSites = [];
            this.getUrlSites();
            if (this.urlSites[0] !== Response.name) {
                // add selected site to url if not already in it
                this.urlSites = [Response.name];
                this.urlParams.set('site', this.urlSites.join(','));
                this.updateQueryParams();
            }
            this.selectedSites = [Response.name];
            this.getResultData(); // query result data
        });
        this._mapService.MultSelect.subscribe((Response) => {
            // subscriber for map ctrl+click (selecting multiple sites)
            this.charsWithSites = [];
            this.getUrlSites();
            if (this.urlSites.indexOf(Response.name) === -1) {
                // add selected site to url if not already in it
                this.urlSites.push(Response.name);
                this.urlParams.set('site', this.urlSites.join(','));
                this.updateQueryParams();
            }
            if (this.selectedSites.indexOf(Response.name) === -1) {
                this.selectedSites.push(Response.name);
            }
            this.getResultData(); // query result data
        });
        this._mapService.SelectedChar.subscribe((Response) => {
            // subscriber for parameter filter/characteristic selection
            if (Response.length === 0) {this.noData = true;
            } else {
                this.queryChar = Response;
                this.noData = false;
            }
        });

        this._mapService.SiteChange.subscribe((geojson) => {
            // subscriber for sites updating on the map (e.g. when a filter is selected)
            this.getUrlSites();
            this.geojson = geojson; this.geoJSONsiteCount = geojson.features.length;
            this.siteFilterData = this._mapService.filterOptions;
            // if a site was sent through url on load, will skip making statistic charts
            if (this.urlSites.length === 0) {
                this.selectedSites = [];
                this.showSiteData = false; this.noData = false;
                // create pie charts based on type and organization of all sites on the map
                this.createStatChart(this.typeChart, 'Site Type Stats', 'searchType');
                this.createStatChart(this.orgChart, 'Site Organization Stats', 'orgName');
            }
        });
        // custom chart export button
        const customButton = Highcharts.getOptions().exporting.buttons.contextButton;
        customButton.text = 'Chart Options';
        customButton.theme = {fill: '#3E3BFB' };
        customButton.symbol = null;
        customButton.menuItems = customButton.menuItems.slice(2);

        this._siteChartOptions = { // options for site data scatter plots
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
                    formatter: function () {
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
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                        },
                        yAxis: {
                            labels: {
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            },
            exporting: {
                enabled: true,
                contextButton: customButton
            }
        };

        this._typeChartOptions = { // chart options for pie charts
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
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                        },
                        yAxis: {
                            labels: {
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
            },
            exporting: {
                enabled: false
            }
        };

        this.typeChart = new Highcharts.Chart('typeChart', this._typeChartOptions);
        this.orgChart = new Highcharts.Chart('orgChart', this._typeChartOptions);
        this.typeChart.setTitle({ text: 'Sites By Type' });
        this.orgChart.setTitle({ text: 'Sites By Organization' });

    } // End NgOnInit

    public updateQueryParams() {
        window.history.replaceState({}, '', decodeURIComponent(`${location.pathname}?${this.urlParams}`));
    }

    public getUrlSites() {
        // get list of sites listed in the url
        this.urlParams = new URLSearchParams(window.location.search);
        if (this.urlParams.get('site') !== null) {this.urlSites = this.urlParams.get('site').split(',');
        } else {this.urlSites = []; }
    }

    public getResultData() {
        // get result query, gets back a csv
        if (this.subscription) { this.subscription.unsubscribe(); }
        this._loaderService.showDataLoad();
        this.dataLoading = true;
        this.resultParams['siteid'] = this.selectedSites;
        this.resultParams['characteristicName'] = this.queryChar;
        this.subscription = this._http.get(this.configSettings.resultUrl, {search: this.resultParams})
            .subscribe(csv => {
                this.noGraphData = false;
                this.resultCsv = csv['_body'];
                this.resultJson = this.csvJSON(this.resultCsv);
                this.showSiteData = true; this.noData = false; this.charTypes = [];
                if (this.resultJson.length > 0 && this.selectedSites.length > 0) {
                    // if data returned, find list of characteristics/measure unit codes and select and create charts for the first one
                    this.getCharTypes();
                    this.selectedChar = this.charTypes[0];
                    this.createCharts(this.charTypes[0], false);
                    this.addProps();
                } else { this.noData = true; } // if response csv has no actual data, show no data message
                this._loaderService.hideDataLoad();
                this.dataLoading = false;
            }, error => {
                this.handleError(error);
            });
    }

    public getCharTypes() {
        // gets list of characteristics/measure unit codes that will become the options in the "Measurement Type" select
        for (let i = 0; i < this.resultJson.length; i++) {
            const value = this.resultJson[i]['ResultMeasure/MeasureUnitCode'];
            if (this.charsWithSites.indexOf(this.resultJson[i].CharacteristicName) === -1) {
                this.charsWithSites.push(this.resultJson[i].CharacteristicName);
            }
            if (value === '' && this.resultJson[i].ResultMeasureValue !== '' && this.charTypes.indexOf('N/A') === -1) {
                this.charTypes.push('N/A');
            } else if (value !== '' && this.charTypes.indexOf(value) === -1) {this.charTypes.push(value); }
        }
    }

    public createCharts(char, modal) {
        let chartDiv;
        // determine whether these are the regular charts or the charts for the print modal
        if (!modal) {chartDiv = document.getElementById('charts');
        } else {chartDiv = document.getElementById('modalCharts'); }
        // remove all existing charts from the div
        while (chartDiv.firstChild) {chartDiv.removeChild(chartDiv.firstChild); }
        let chartNo = 1; const chartData = []; const uniqueData = [];
        // creates charts based on characteristic (or MeasureUnitCode, e.g. "mg/l as N") as well as result fraction (dissolved v. total)
        for (const fraction of this.fractionTypes) {
            const series = [];
            for (const site of this.selectedSites) {
                // creates a series for each site
                const data = [];
                for (const result of this.resultJson) {
                    const resultVal = result['ResultMeasure/MeasureUnitCode']; let val;
                    if (result.MonitoringLocationIdentifier === site && (resultVal === char || (resultVal === '' && char === 'N/A'))
                        && result.ResultSampleFractionText === fraction) {
                        if (/\d/.test(result.ResultMeasureValue)) {
                            val = Number(result.ResultMeasureValue);
                            let date = result.ActivityStartDate.split('-');
                            date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                            data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                            if (JSON.stringify(uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                                uniqueData.push([date, val]);
                            }
                            chartData.push([date / 10000000000, val]); // need to divide values or it causes problems in regression function
                        } // skip if no value
                    }
                }
                if (data.length > 0) {series.push({ name: site, data: data }); }
            }
            if (series.length > 0) {
                // dynamically adds divs for each chart before creating them
                let chartId;
                if (!modal) {chartId = 'chart' + chartNo;
                } else {chartId = 'modalChart' + chartNo; }

                const newDiv = document.createElement('div');
                newDiv.id = chartId;
                newDiv.classList.add('new-charts');
                chartDiv.appendChild(newDiv);
                const newChart = Highcharts.chart(chartId, this._siteChartOptions);

                // add chart title, contains characteristic and fraction
                if (fraction === '') {newChart.setTitle({text: char}, {}, false);
                } else {newChart.setTitle({text: char + ', ' + fraction}, {}, false); }
                for (const set of series) {
                    // for each series, add to chart and create a regression line
                    newChart.addSeries(set);
                    if (set.data.length > 2) { this.createRegression(newChart, set); }
                }
                if (uniqueData.length < chartData.length) {
                    // fix for duplicate data, slightly jitters to allow differentiation
                    newChart.options.plotOptions.scatter.jitter = {x: 0, y: 0.01};
                }
                newChart.redraw();
                chartNo ++;
            }
        }
        if (chartNo === 1) { this.noGraphData = true; } // adds no graph warning if no result values were available
    }

    public createRegression(chart, series) {
        // create regression line
        for (const data of series.data) {
            data[0] = data.x / 10000000000; delete data.x;
            data[1] = data.y; delete data.y;
        }
        const ymxb = regression.linear(series.data);
        const m = ymxb.equation[0]; const b = ymxb.equation[1];
        const xs = [];
        series.data.forEach(function(d) {
            xs.push(d[0]);
        });

        const x0 = Math.min.apply(null, xs);
        let y0 = m * x0 + b;
        const xf = Math.max.apply(null, xs);
        let yf = m * xf + b;

        if (y0 < 0) {y0 = 0; }
        if (yf < 0) {yf = 0; }

        chart.addSeries({type: 'line', name: 'Regression, ' + series.name, data: [[x0 * 10000000000, y0], [xf * 10000000000, yf]]});
    }

    public makeModalChart() {
        // replicates the data charts for the print modal
        this.showModal = true;
        const self = this;
        setTimeout(function() {
            self.createCharts(self.selectedChar, true);
            const table = document.getElementById('dataTable').cloneNode(true);
            const modalTable = document.getElementById('modalTable');
            modalTable.appendChild(table);
        }, 100);
    }

    public createStatChart(chart, name, property) {
        // creates pie charts based on type and organization of each site on the map
        while (chart.series && chart.series.length > 0) { chart.series[0].remove(true); }
        const propData = [];
        this.siteFilterData[property].forEach(prop => {
            const count = this.geojson.features.filter(function (feat) {
                return feat.properties[property] === prop;
            }).length;
            if (count > 0) {
                const perc = count / this.geoJSONsiteCount * 100;
                propData.push({ name: prop, y: perc, sliced: true, selected: true });
            }
        });
        chart.addSeries({ name: name, colorByPoint: true, data: propData });
    }

    private handleError (error: Response | any) {
        this._loaderService.hideDataLoad();
        this.dataLoading = false; this.noData = true;
        console.log(error);
    }

    public addProps() {
        // adds locational properties and site filter properties to each line in the result query csv
        for (const result of this.resultJson) {
            const features = this._mapService.geoJson.features;
            const jsonIndex = features.findIndex(site => {
                return site.properties.name === result.MonitoringLocationIdentifier;
            });
            result.Latitude = features[jsonIndex].geometry.coordinates[1]; // add latitude
            result.Longitude = features[jsonIndex].geometry.coordinates[0]; // add longitude
            result.Datum = 'WGS 84'; // add datum
            result.Huc8 = features[jsonIndex].properties.huc8; // add huc8
            result.LocName = features[jsonIndex].properties.locName; // add location name
            result.Type = features[jsonIndex].properties.type; // add site type
            result.SearchType = features[jsonIndex].properties.searchType; // add search type
        }
        this.resultCsv = this.jsonToCSV(this.resultJson); // recreates .csv with updated proprties
    }

    public csvJSON(csv) {
        // converts csv to json
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
        return result;
    }

    public jsonToCSV(json) {
        // converts json to csv
        let str = '';
        let line = '';
        Object.keys(json[0]).forEach(function(key) {
            if (line !== '') {line += ','; }
            line += key;
        });
        str += line + '\r\n';
        for (let i = 0; i < json.length; i++) {
            line = '';
            Object.keys(json[i]).forEach(function(key) {
                if (line !== '') {line += ','; }
                if (typeof json[i][key] === 'string' && json[i][key].indexOf(',') !== -1) {
                    line += '"' + json[i][key] + '"';
                } else {line += json[i][key]; }
            });
            str += line + '\r\n';
        }
        return str;
    }

    public downloadFile() {
        // downloads the csv from the result query
        let filename = 'result.csv';
        if (this.selectedSites.length === 1) {filename = this.selectedSites[0] + '.csv'; }
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

    public printReport() {
        window.print();
    }

}// END class
