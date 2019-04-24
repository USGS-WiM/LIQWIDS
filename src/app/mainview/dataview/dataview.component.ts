import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as regression from 'regression';

import { TabsComponent } from '../../shared/components/tabs/tabs.component';
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
    public siteChart: any;
    private _siteChartOptions: any;
    public siteChart2: any;
    public multSiteChart: any;
    public typeChart: any;
    private _typeChartOptions: any;
    public orgChart: any;
    public modalChart: any;
    public modalChart2: any;
    public resultCsv;
    public resultJson;
    public filterSelections;
    public queryChar = 'Nitrate';
    public charTypes = [];
    private siteFilterData;
    private geoJSONsiteCount;
    private geojson;
    private showSiteData = false;
    private selectedSites = [];
    private noData = false;
    private noGraphData = false;
    private dataLoading = false;
    private unitCodes = [];
    private uniqueData = [];
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
            this.charsWithSites = [];
            this.getUrlSites();
            if (this.urlSites[0] !== Response.name) {
                this.urlSites = [Response.name];
                this.urlParams.set('site', this.urlSites.join(','));
                this.updateQueryParams();
            }
            this.selectedSites = [Response.name];
            this.getResultData();
        });
        this._mapService.MultSelect.subscribe((Response) => {
            this.charsWithSites = [];
            this.getUrlSites();
            if (this.urlSites.indexOf(Response.name) === -1) {
                this.urlSites.push(Response.name);
                this.urlParams.set('site', this.urlSites.join(','));
                this.updateQueryParams();
            }
            if (this.selectedSites.indexOf(Response.name) === -1) {
                this.selectedSites.push(Response.name);
            }
            this.getResultData();
        });
        this._mapService.SelectedChar.subscribe((Response) => {
            this.queryChar = Response;
            this.noData = false;
        });

        this._mapService.SiteChange.subscribe((geojson) => {
            this.getUrlSites();
            this.geojson = geojson; this.geoJSONsiteCount = geojson.features.length;
            this.siteFilterData = this._mapService.filterOptions;
            // if site given on load, will skip making statistic charts
            if (this.urlSites.length === 0) {
                this.selectedSites = [];
                this.showSiteData = false; this.noData = false;
                this.createStatChart(this.typeChart, 'Site Type Stats', 'searchType');
                this.createStatChart(this.orgChart, 'Site Organization Stats', 'orgName');
            }
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
            }
        };
        /* this.siteChart = new Highcharts.Chart('siteChart', this._siteChartOptions);
        this.siteChart2 = new Highcharts.Chart('siteChart2', this._siteChartOptions);
        this.multSiteChart = new Highcharts.Chart('multSiteChart', this._siteChartOptions);
        this.siteChart.setTitle({ text: 'Result Measure Value by Depth' });
        this.siteChart2.setTitle({ text: 'Result Measure Value by Measurement Type' });
        this.multSiteChart.setTitle({text: 'Result Measure Value by Site'});*/

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
        this.urlParams = new URLSearchParams(window.location.search);
        if (this.urlParams.get('site') !== null) {this.urlSites = this.urlParams.get('site').split(',');
        } else {this.urlSites = []; }
    }

    public getResultData() {
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
                this.showSiteData = true; this.noData = false;
                if (this.resultJson.length > 0 && this.selectedSites.length > 0) {
                    this.getCharTypes();
                    this.createCharts(this.charTypes[0], false);
                    this.addProps();
                } else { this.noData = true; }
                this._loaderService.hideDataLoad();
                this.dataLoading = false;
            }, error => {
                this.handleError(error);
            });
    }

    public getCharTypes() {
        this.charTypes = [];
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
        if (!modal) {chartDiv = document.getElementById('charts');
        } else {chartDiv = document.getElementById('modalCharts'); }
        while (chartDiv.firstChild) {chartDiv.removeChild(chartDiv.firstChild); }
        let chartNo = 1; const chartData = []; const uniqueData = [];
        for (const fraction of this.fractionTypes) {
            const series = [];
            for (const site of this.selectedSites) {
                const data = [];
                for (const result of this.resultJson) {
                    const resultVal = result['ResultMeasure/MeasureUnitCode']; let val;
                    if (result.MonitoringLocationIdentifier === site && (resultVal === char || (resultVal === '' && char === 'N/A'))
                        && result.ResultSampleFractionText === fraction) {
                        if (/\d/.test(result.ResultMeasureValue)) {
                            val = Number(result.ResultMeasureValue);
                            let date = result.ActivityStartDate.split('-');
                            date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                            if (result['ResultMeasure/MeasureUnitCode'] === 'ug/l')  {
                                data.push({ x: date, y: val / 1000, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                            } else if (result['ResultMeasure/MeasureUnitCode'] === 'umol') {
                                data.push({ x: date, y: val / 4.31, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                            } else {
                                data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                            }
                            if (JSON.stringify(uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                                uniqueData.push([date, val]);
                            }
                            chartData.push([date / 10000000000, val]);
                        } // skip if no value
                    }
                }
                if (data.length > 0) {series.push({ name: site, data: data }); }
            }
            if (series.length > 0) {
                let chartId;
                if (!modal) {chartId = 'chart' + chartNo;
                } else {chartId = 'modalChart' + chartNo; }
                const newDiv = document.createElement('div');
                newDiv.id = chartId;
                newDiv.classList.add('new-charts');
                chartDiv.appendChild(newDiv);
                const newChart = Highcharts.chart(chartId, this._siteChartOptions);
                if (fraction === '') {newChart.setTitle({text: char}, {}, false);
                } else {newChart.setTitle({text: char + ', ' + fraction}, {}, false); }
                for (const set of series) {
                    newChart.addSeries(set);
                    if (set.data.length > 2) { this.createRegression(newChart, set); }
                }
                if (uniqueData.length < chartData.length) {
                    newChart.options.plotOptions.scatter.jitter = {x: 0, y: 0.01};
                }
                chartNo ++;
            }
        }
        if (chartNo === 1) { this.noGraphData = true; }
    }

    /*public createSiteChart(char, chart) {
        const seriesData = [];
        while (chart.series && chart.series.length > 0) { chart.series[0].remove(true); }
        const array = [];
        for (let i = 0; i < this.resultJson.length; i++) { // creating separate series based on properties
            const value = this.resultJson[i][char];
            if (this.charsWithSites.indexOf(this.resultJson[i].CharacteristicName) === -1) {
                this.charsWithSites.push(this.resultJson[i].CharacteristicName);
            }
            if (value !== '' && array.indexOf(value) === -1) {
                array.push(value);
            } else if (value === '' && array.indexOf('N/A') === -1 && char !== 'ResultMeasure/MeasureUnitCode') { array.push('N/A'); }
        }

        if (char === 'ActivityBottomDepthHeightMeasure/MeasureValue') {this.unitCodes = array; }
        for (let item = 0; item < array.length; item++) {
            const data = new Array();
            for (const result of this.resultJson) {
                let val; const currentValue = result[char];
                if (currentValue === array[item] || (currentValue === '' && array[item] === 'N/A')) {
                    if (/\d/.test(result.ResultMeasureValue)) {
                        val = Number(result.ResultMeasureValue);
                        let date = result.ActivityStartDate.split('-');
                        date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                        if (result['ResultMeasure/MeasureUnitCode'] === 'ug/l')  {
                            data.push({ x: date, y: val / 1000, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                        } else if (result['ResultMeasure/MeasureUnitCode'] === 'umol') {
                            data.push({ x: date, y: val / 4.31, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                        } else {
                            data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                        }
                        if (JSON.stringify(this.uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                            this.uniqueData.push([date, val]);
                        }
                        seriesData.push([date / 10000000000, val]);
                    } // skip if no value
                }
            }
            if (chart === this.siteChart) {chart.addSeries({ name: 'Depth: ' + array[item], data: data });
            } else { chart.addSeries({ name: array[item], data: data }); }
        }

        // create regression
        if (seriesData.length > 2) {this.createRegression(chart, seriesData); }
    }*/

    public createRegression(chart, series) {
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
        // need to fix this, have modal boolean option in createcharts?
        this.showModal = true;
        const self = this;
        setTimeout(function() {
            self.createCharts(self.charTypes[0], true);
            const table = document.getElementById('dataTable').cloneNode(true);
            const modalTable = document.getElementById('modalTable');
            modalTable.appendChild(table);
        }, 100);
    }

    /*public createMultSiteChart(chart) {
        const seriesData = [];
        while (chart.series && chart.series.length > 0) { chart.series[0].remove(true); }
        this.selectedSites.forEach((site) => {
            const array = new Array();
            for (const result of this.resultJson) {
                if (result.MonitoringLocationIdentifier === site) {
                    const value = result['ResultMeasure/MeasureUnitCode'];
                    if (value !== '' && array.indexOf(value) === -1) {
                        array.push(value);
                    }
                }
                if (this.charsWithSites.indexOf(result.CharacteristicName) === -1) {
                    this.charsWithSites.push(result.CharacteristicName);
                }
            }
            for (const unit of array) {
                let val; const data = new Array();
                for (const result of this.resultJson) {
                    if (result.MonitoringLocationIdentifier === site && result['ResultMeasure/MeasureUnitCode'] === unit) {
                        if (/\d/.test(result.ResultMeasureValue)) {
                            val = Number(result.ResultMeasureValue);
                            let date = result.ActivityStartDate.split('-');
                            date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                            if (result['ResultMeasure/MeasureUnitCode'] === 'ug/l')  {
                                data.push({ x: date, y: val / 1000, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                            } else if (result['ResultMeasure/MeasureUnitCode'] === 'umol') {
                                data.push({ x: date, y: val / 4.31, name: val + ' ' + result['ResultMeasure/MeasureUnitCode']});
                            } else {
                                data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                            }
                            if (JSON.stringify(this.uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                                this.uniqueData.push([date, val]);
                            }
                            seriesData.push([date / 10000000000, val]);
                        } // skip if no value
                    }
                }
                chart.addSeries({name: site + ', ' + unit, data: data});
            }
        });
        if (seriesData.length > 2) {this.createRegression(chart, seriesData); }
    }*/

    public createStatChart(chart, name, property) {
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
        for (const result of this.resultJson) {
            const features = this._mapService.geoJson.features;
            const jsonIndex = features.findIndex(site => {
                return site.properties.name === result.MonitoringLocationIdentifier;
            });
            result.Latitude = features[jsonIndex].geometry.coordinates[1];
            result.Longitude = features[jsonIndex].geometry.coordinates[0];
            result.Datum = 'WGS 84';
            result.Huc8 = features[jsonIndex].properties.huc8;
            result.LocName = features[jsonIndex].properties.locName;
            result.Type = features[jsonIndex].properties.type;
            result.SearchType = features[jsonIndex].properties.searchType;
        }
        this.resultCsv = this.jsonToCSV(this.resultJson);
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
        return result;
    }

    public jsonToCSV(json) {
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
