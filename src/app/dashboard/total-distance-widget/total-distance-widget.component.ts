import { Component, OnInit, Input } from '@angular/core';

import { Flight } from '../../data-retriever/flight';
import { Airport } from '../../data-retriever/airport';

@Component({
  selector: 'app-total-distance-widget',
  templateUrl: './total-distance-widget.component.html',
  styleUrls: ['./total-distance-widget.component.css']
})
export class TotalDistanceWidgetComponent implements OnInit {
  @Input() flights: Flight[];
  @Input() airports: Airport[];

  constructor() { }

  ngOnInit() {
  }

  getTotalDistance(): number {
    var distance = 0;
    for (var flight of this.flights) {
      var airport1 = this.getAirport(flight.departing_airport_id);
      var airport2 = this.getAirport(flight.arrival_airport_id);
      distance += this.getDistanceBetweenAirports(airport1, airport2);
    }

    return distance;
  }

  private getAirport(id: string): Airport {
    return this.airports.filter(airport => airport.id === id)[0];
  }

  private getDistanceBetweenAirports(a1: Airport, a2: Airport): number {
    var r = 6371;
    var f1 = this.toRadians(a1.latitude);
    var f2 = this.toRadians(a2.latitude);
    var df = this.toRadians(a2.latitude - a1.latitude);
    var dd = this.toRadians(a2.longitude - a1.longitude);

    var a = Math.sin(df / 2) * Math.sin(df / 2) +
      Math.cos(f1) * Math.cos(f2) *
      Math.sin(dd / 2) * Math.sin(dd / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(r * c);
  }

  private toRadians(degrees: number): number {
    return degrees * 0.01745329251; //* Math.PI / 180;
  }
}
