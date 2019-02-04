//purpose:     Service for the whole application. setters/getters needed to communicate information with the other parts of the app

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';

import { MapService } from '../../shared/services/map.service';
import { Ioptions } from "../interfaces/options.interface";

@Injectable({
  providedIn: 'root'
})
export class LiqwidsService {
    private characteristicUrl: string;
    private _options: Subject<Array<Ioptions>> = new Subject<Array<Ioptions>>();
    

    constructor(private _http: Http, private _mapService: MapService) {  }


    //getter
    public get options(): Observable<Array<Ioptions>> {
        return this._options.asObservable();
    } 

    //called from constructor
    /* private setOptions(): void {
        this._http.get('https://www.waterqualitydata.us/Codes/characteristicname?text=nitrogen&mimeType=json')
            .pipe(map(res => res.json())
            
            
        ); 
            
            
    }*/
}
