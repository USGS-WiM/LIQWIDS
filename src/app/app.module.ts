import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewModule } from './mainview/mainview.module';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { environment } from '../environments/environment';

export function ConfigLoader(configService: ConfigService) {
    // Note: this factory needs to return a function (that returns a promise)
    return () => configService.load(environment.configFile);
}

export function LookupLoader(configService: ConfigService) {
    // Note: this factory needs to return a function (that returns a promise)
    return () => configService.loadLookups(environment.lookupFile);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MainviewModule,
        SharedModule
    ],
    providers: [ConfigService, { provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [ConfigService], multi: true },
        { provide: APP_INITIALIZER, useFactory: LookupLoader, deps: [ConfigService], multi: true } ],
    bootstrap: [AppComponent]
})
export class AppModule {}
