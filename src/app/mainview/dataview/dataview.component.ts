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
    public multSiteChart: any;
    public typeChart: any;
    private _typeChartOptions: any;
    public orgChart: any;
    public modalChart: any;
    public modalChart2: any;
    public resultCsv;
    public resultJson;
    public filterSelections;
    public queryChar = ['Nitrate'];
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
    public showModal = false;
    public urlParams;

    constructor(private _mapService: MapService, private _http: Http, private _loaderService: LoaderService) { }

    ngOnInit() {
        this._mapService.SelectedSite.subscribe((Response) => {
            this.selectedSites = [Response.name];
            this.getResultData();
        });
        this._mapService.MultSelect.subscribe((Response) => {
            if (this.selectedSites.indexOf(Response.name) === -1) {
                this.selectedSites.push(Response.name);
            }
            this.getResultData();
        });
        this._mapService.SelectedChar.subscribe((Response) => {
            this.queryChar = Response;
            this.noData = false;
            if (typeof Response === 'string') {
                this.queryChar = [Response];
            } else { this.queryChar = Response; }
        });

        this._mapService.SiteChange.subscribe((geojson) => {
            this.geojson = geojson; this.selectedSites = [];
            this.geoJSONsiteCount = geojson.features.length;
            this.showSiteData = false; this.noData = false;
            this.siteFilterData = this._mapService.filterOptions;
            this.createStatChart(this.typeChart, 'Site Type Stats', 'searchType');
            this.createStatChart(this.orgChart, 'Site Organization Stats', 'orgName');
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
        this.siteChart = new Highcharts.Chart('siteChart', this._siteChartOptions);
        this.siteChart2 = new Highcharts.Chart('siteChart2', this._siteChartOptions);
        this.multSiteChart = new Highcharts.Chart('multSiteChart', this._siteChartOptions);
        this.siteChart.setTitle({ text: 'Result Measure Value by Depth' });
        this.siteChart2.setTitle({ text: 'Result Measure Value by Measurement Type' });
        this.multSiteChart.setTitle({text: 'Result Measure Value by Site'});

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

    public getResultData() {
        this._loaderService.showDataLoad();
        this.dataLoading = true;
        let resultUrl = 'https://www.waterqualitydata.us/data/Result/search?mimeType=csv&countrycode=US&minactivities=1';
        const sites = this.selectedSites;
        for (const site of this.selectedSites) {
            resultUrl += '&siteid=' + site;
        }
        for (const char of this.queryChar) {
            resultUrl += '&characteristicName=' + char;
        }
        this._http.get(resultUrl)
            .subscribe(csv => {
                this.noGraphData = false;
                this.resultCsv = csv; this.resultCsv = this.resultCsv._body;
                this.resultJson = this.csvJSON(this.resultCsv);
                this.resultJson = JSON.parse(this.resultJson);
                this.showSiteData = true; this.noData = false; this.uniqueData = [];
                if (this.resultJson.length > 0 && sites.length === 1) {
                    this.createSiteChart('ResultMeasure/MeasureUnitCode', this.siteChart2);
                    this.createSiteChart('ActivityBottomDepthHeightMeasure/MeasureValue', this.siteChart);
                } else if (this.resultJson.length > 0 && sites.length > 1) {
                    this.createMultSiteChart(this.multSiteChart);
                } else { this.noData = true; }
                this._loaderService.hideDataLoad();
                this.dataLoading = false;

                // if duplicates, jitter the points, need to find a way of removing duplicates...
                if (this.uniqueData.length < this.resultJson.length) {
                    this.siteChart.options.plotOptions.scatter.jitter = {x: 0, y: 0.01};
                    this.siteChart2.options.plotOptions.scatter.jitter = {x: 0, y: 0.01};
                }
                if (sites.length === 1 && !this.siteChart2.series.data && this.siteChart.series[0].data.length === 0) {
                    this.noGraphData = true;
                }
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

    public createSiteChart(char, chart) {
        while (chart.series && chart.series.length > 0) { chart.series[0].remove(true); }
        const array = [];
        for (let i = 0; i < this.resultJson.length; i++) { // creating separate series based on properties
            const value = this.resultJson[i][char];
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
                    } // skip if no value
                }
            }
            if (chart === this.siteChart) {chart.addSeries({ name: 'Depth: ' + array[item], data: data });
            } else {chart.addSeries({ name: array[item], data: data }); }
        }
    }

    public makeModalChart() {
        this.showModal = true;
        const self = this;
        setTimeout(function() {
            if (self.selectedSites.length === 1) {
                self.modalChart2 = new Highcharts.Chart('modalChart2', self._siteChartOptions);
                self.modalChart2.setTitle({ text: 'Result Measure Value by Depth' });
                self.createSiteChart('ActivityBottomDepthHeightMeasure/MeasureValue', self.modalChart2);
                self.modalChart = new Highcharts.Chart('modalChart', self._siteChartOptions);
                self.modalChart.setTitle({ text: 'Result Measure Value by Measurement Type' });
                self.createSiteChart('ResultMeasure/MeasureUnitCode', self.modalChart);
            } else {
                self.modalChart = new Highcharts.Chart('modalChart', self._siteChartOptions);
                self.modalChart.setTitle({ text: 'Result Measure Value' });
                self.createMultSiteChart(self.modalChart);
                document.getElementById('modalChart2').innerHTML = '';
            }
            const table = document.getElementById('dataTable').cloneNode(true);
            const modalTable = document.getElementById('modalTable');
            modalTable.appendChild(table);
        }, 100);
    }

    public createMultSiteChart(chart) {
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
                        } // skip if no value
                    }
                }
                chart.addSeries({name: site + ', ' + unit, data: data});
            }
        });
    }

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
