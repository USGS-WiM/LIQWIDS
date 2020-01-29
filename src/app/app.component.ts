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

    constructor(public mapService: MapService) {}

    ngOnInit() {
        this.mapService.ToasterSubject.subscribe(toastType => {
            this.toastType = toastType;
        });
    }

    // in sidebar
}
