// ------------------------------------------------------------------------------
// ------------ config ----------------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     Configuration file for all the url endpoints in siglservices

import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";

@Injectable()
export class CONFIG {
    
    public static get WFS_URL(): string { 
        return "https://www.waterqualitydata.us/ogcservices/wfs/?request=GetFeature&service=wfs&version=2.0.0&typeNames=wqp_sites&SEARCHPARAMS=statecode%3AUS%3A36%3Bcountycode%3AUS%3A36%3A103%7CUS%3A36%3A059%3Bsiteid%3AUSGS-01302800%3BcharacteristicName%3ANitrate%7CNitrogen&outputFormat=application%2Fjson";
    } 

    public static get MIN_JSON_HEADERS() { return new Headers({ "Accept": "application/json" }); };
    public static get JSON_HEADERS() { return new Headers({ "Accept": "application/json", "Content-Type": "application/json" }); };

}