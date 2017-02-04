import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule, MapTypeStyle } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './dashboard/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FlexLayoutModule.forRoot(),
    AgmCoreModule.forRoot(), //google maps
    MaterialModule.forRoot() //angular material
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
