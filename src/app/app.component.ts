import { Component, OnInit } from '@angular/core';
import packageJson from 'package.json';
import { MapService } from './shared/services/map.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'LIQWIDS';
    pack = packageJson;
    expandSidebar;
    aboutModal;
    toastType = 'firstLoadWarning';
	userGuideModal;
	
	authenticated = false;
	authPassword = "";

    constructor(public mapService: MapService) {}

    ngOnInit() {
        this.mapService.ToasterSubject.subscribe(toastType => {
            this.toastType = toastType;
        });
	}
	
	// Authentication before load
	authenticate(){
		if(this.authPassword && this.authPassword == "test"){
			this.authenticated = true;
		}else{
			alert("Nope.")
		}
	}

    // in sidebar
}
