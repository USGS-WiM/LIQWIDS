import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEventPattern } from 'rxjs';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MapService } from './services/map.service';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [TabsComponent, TabComponent, LoaderComponent],
  imports: [ CommonModule ],
  exports: [TabsComponent, TabComponent, LoaderComponent],
  providers: [MapService, LoaderService]
})
export class SharedModule { }
