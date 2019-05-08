import { Component, OnInit } from '@angular/core';
import packageJson from 'package.json';

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
    showToast;

    constructor() {}

    ngOnInit() {}

    // in sidebar
}
