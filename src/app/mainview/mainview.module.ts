import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataviewComponent } from './dataview/dataview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [MapComponent, SidebarComponent, DataviewComponent],
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, SharedModule, NgSelectModule ],
  exports: [MapComponent, SidebarComponent, DataviewComponent]
})
export class MainviewModule { }
