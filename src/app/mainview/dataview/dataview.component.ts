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
    public typeChart: any;
    private _typeChartOptions: any;
    public orgChart: any;
    private _orgChartOptions: any;
    public result;
    public resultJson;
    public filterSelections;
    public characteristic = 'Nitrate';
    private siteFilterData;
    private geoJSONsiteCount;
    private geojson;

    constructor(private _mapService: MapService, private _http: Http, private _loaderService: LoaderService) { }

    ngOnInit() {
        this._mapService.SelectedSite.subscribe((Response) => {
            this.getResultData(Response.name);
        });
        this._mapService.SelectedChar.subscribe((Response) => {
            this.characteristic = Response;
        });

        this._mapService.SiteChange.subscribe((geojson) => {
            this.geojson = geojson;
            this.geoJSONsiteCount = geojson.features.length;
            this.getStatData();
        });


    } // End NgOnInit

    public getResultData(site) {
        this._loaderService.showDataLoad(); // want to have smaller loading component
        let resultUrl = 'https://www.waterqualitydata.us/data/Result/search?mimeType=csv&countrycode=US';
        resultUrl += '&siteid=' + site + '&characteristicName=' + this.characteristic;
        this._http.get(resultUrl)
            .subscribe(csv => {
                this.result = csv;
                this.result = this.csvJSON(this.result._body);
                this.resultJson = JSON.parse(this.result);
                this.createSiteChart(site);
            });
    }

    public csvJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(',');
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    }

    public createSiteChart(site) {
        this._siteChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: site
            },
            subtitle: {
                text: 'Scatter Plot'
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
                    text: 'mg/l'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1
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
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x:%m-%d-%Y}<b><br>',
                        pointFormat: '{point.y} mg/l'
                    }
                }
            }
        };
        this.siteChart = new Highcharts.Chart('siteChart', this._siteChartOptions);
        const depthValues = [];
        for (let i = 0; i < this.resultJson.length; i++ ) { // creating separate series based on properties
            const value = this.resultJson[i]['ActivityBottomDepthHeightMeasure/MeasureValue']; // can replace this with other properties
            if (value !== '' && depthValues.indexOf(value) === -1) { depthValues.push(value);
            } else if (value === '' && depthValues.indexOf('N/A') === -1) {depthValues.push('N/A'); }
        }
        for (let depth = 0; depth < depthValues.length; depth++) {
            const data = new Array();
            for (let i = 0; i < this.resultJson.length; i++ ) {
                const currentSite = this.resultJson[i];
                const currentValue = currentSite['ActivityBottomDepthHeightMeasure/MeasureValue'];
                if (currentValue === depthValues[depth] || (currentValue === '' && depthValues[depth] === 'N/A')) {
                    let resultVal;
                    if (/\d/.test(currentSite.ResultMeasureValue)) {resultVal = Number(currentSite.ResultMeasureValue);
                    } else if (/\d/.test(currentSite['ResultMeasure/MeasureUnitCode'])) {
                        resultVal = Number(currentSite['ResultMeasure/MeasureUnitCode']); // makes up for some (not all) csv mistakes
                    } else {resultVal = 0; }
                    let date = currentSite.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], date[1], Number(date[2]) + 1);
                    data.push([date, resultVal]);
                }
            }
            this.siteChart.addSeries({name: 'Depth: ' + depthValues[depth], data: data});
        }
        this._loaderService.hideDataLoad();
    }
    public getStatData() {
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
        this._typeChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Sites By Type'
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
        this._orgChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Sites By Organization'
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
        this.orgChart = new Highcharts.Chart('orgChart', this._orgChartOptions);
        this.orgChart.addSeries({name: 'Site Organization Stats', colorByPoint: true, data: orgData});

    }

}// END class
