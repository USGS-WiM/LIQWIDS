import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Config } from '../interfaces/config';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
    private config: Config;
    private lookup;
    constructor(private _http: Http) {}

    public load(url: string) {
        return new Promise(resolve => {
            this._http
                .get(url)
                .pipe(map(res => res.json()))
                .subscribe((config: any) => {
                    this.config = config;
                    resolve();
                });
        });
    }

    public getConfiguration(): Config {
        return this.config;
    }

    public loadLookups(url: string) {
        return new Promise(resolve => {
            this._http
                .get(url)
                .pipe(map(res => res.json()))
                .subscribe((lookup: any) => {
                    this.lookup = lookup;
                    resolve();
                });
        });
    }

    public getLookup() {
        return this.lookup;
    }
}
