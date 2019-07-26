import { Injectable } from '@angular/core';
import { Isummary } from '../interfaces/summary.interface';
import { Iorg } from '../interfaces/org.interface';
import { Ioutput } from '../interfaces/output.interface';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Config } from '../interfaces/config';
import { ConfigService } from './config.service';
import { saveAs } from 'file-saver';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SummariesService {
    public csvOrgFile;
    public jsonOrgFile;
    public orgList;

    public csvSumFile;
    public jsonSumFile;
    public sumList: Isummary[];

    public sum_output: Ioutput[];
    public submit_dates;
    public samples_nums;

    public summary_data;
    public jsonFile;

    private configSettings: Config;

    constructor(private _http: Http, private _configService: ConfigService, private datePipe: DatePipe) {
        this.configSettings = this._configService.getConfiguration();
    }

    private _summaryDataSubject: Subject<Array<Ioutput>> = new Subject<Array<Ioutput>>();

    public get SummaryData(): Observable<Array<Ioutput>> {
        return this._summaryDataSubject.asObservable();
    }

    public getData() {
        this.sum_output = [];
        // to get the new org_summary.json, uncomment out "this.getOrgDate()" and comment out "this.readSumFile()"
        // it may take a few minutes to run, a window will pop up to save the file when it's done
        // this.getOrgData();
        this.readSumFile();
    }
    public readSumFile() {
        this._http.get('./assets/org_summary.json').subscribe(data => {
            this.jsonFile = data;
            this.jsonFile = JSON.parse(this.jsonFile._body);
            for (let i = 0; i < this.jsonFile.length; i++) {
                this.sum_output.push(this.jsonFile[i]);
            }
            this._summaryDataSubject.next(this.sum_output);
        });
    }

    // get list of organizations
    public getOrgData() {
        const orgUrl = this.configSettings.orgUrl + this.configSettings.sumUrlSettings;
        this._http.get(orgUrl).subscribe(data => {
            this.csvOrgFile = data;
            this.orgList = this.csvJSON(this.csvOrgFile._body);
            this.sum_output = [];
            for (let i = 0; i < this.orgList.length; i++) {
                this.getSummaryData(i);
            }
        });
    }

    // get summary data for each org
    public getSummaryData(i) {
        const sumUrl = this.configSettings.summaryUrl + this.configSettings.sumUrlSettings +
            '&organization=' + this.orgList[i].OrganizationIdentifier + '&dataProfile=periodOfRecord';
        this._http.get(sumUrl).subscribe(data => {
            this.csvSumFile = data;
            this.sumList = this.csvJSON(this.csvSumFile._body);
            if (this.sumList.length > 1) {
                // I use the two following lines to double check
                // const blob = new Blob([this.csvSumFile._body], {type: 'text/csv;charset=utf-8;'});
                // saveAs(blob, this.orgList[i].OrganizationFormalName + '.csv');
                const sortedData = this.sumList.sort(function(a, b) {
                    return new Date(b.LastResultSubmittedDate) > new Date(a.LastResultSubmittedDate) ? 1 : -1;
                });
                const last_submit_date = this.datePipe.transform(sortedData[1].LastResultSubmittedDate, 'MM-dd-yyyy');
                const num_samples = this.sumList.length;
                this.sum_output.push({
                    org_name: this.orgList[i].OrganizationFormalName,
                    last_submit: last_submit_date,
                    num_samples: num_samples
                });
            } else if (this.sumList.length === 3) {
                this.sum_output.push({
                    org_name: this.orgList[0].OrganizationFormalName,
                    last_submit: this.sumList[0].LastResultSubmittedDate,
                    num_samples: 1
                });
            }
            this._summaryDataSubject.next(this.sum_output);
            if (i === this.orgList.length - 1) {
                console.log(JSON.stringify(this.sum_output));
                const obj = JSON.stringify(this.sum_output);
                const blob = new Blob([obj], {type: 'application/json'});
                saveAs(blob, 'org_summary.json');
            } // brings up a prompt to save the file, use it to overwrite ./src/assets/org_summary.json
        });
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

    public downloadFile(file, orgID) {
        // downloads the csv from the result query
        const filename = orgID + '.csv';
        const blob = new Blob([file], { type: 'text/csv;charset=utf-8;' });
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
}
