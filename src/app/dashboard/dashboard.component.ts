import { Component, OnInit } from '@angular/core';

import { DashboardDataRetrieverService } from '../data-retriever/dashboard-data-retriever.service';
import { Flight } from '../data-retriever/flight';
import { Airport } from '../data-retriever/airport';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  flights: Flight[];
  airports: Airport[];

  constructor(private _dashboardDataRetrieverService: DashboardDataRetrieverService) { }

  ngOnInit() {
    this._dashboardDataRetrieverService.getData()
      .subscribe(data => {
        this.flights = data.flights;
        this.airports = data.airports;
      })
  }

}
