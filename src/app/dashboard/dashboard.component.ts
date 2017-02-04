import { Component, OnInit } from '@angular/core';

import { IFlight } from '../flights/flight';
import { FlightsRetrieverService } from '../flights/flights-retriever.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  flights: IFlight[];

  constructor(private _flightRetrieverService: FlightsRetrieverService) { }

  ngOnInit() {
    this._flightRetrieverService.getFlights()
    .subscribe(flights => this.flights = flights)
  }

}
