import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule, MapTypeStyle } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './dashboard/map/map.component';
import { DashboardDataRetrieverService } from './data-retriever/dashboard-data-retriever.service';
import { TotalFlightsWidgetComponent } from './dashboard/total-flights-widget/total-flights-widget.component';
import { TotalDistanceWidgetComponent } from './dashboard/total-distance-widget/total-distance-widget.component';
import { TotalTimeWidgetComponent } from './dashboard/total-time-widget/total-time-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent,
    TotalFlightsWidgetComponent,
    TotalDistanceWidgetComponent,
    TotalTimeWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FlexLayoutModule.forRoot(),
    AgmCoreModule.forRoot(), //google maps
    MaterialModule, //angular material
    BrowserAnimationsModule,
    ChartsModule //ng2 charts
  ],
  providers: [
    DashboardDataRetrieverService,
    SimpleTimer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
