import { Component, OnInit, Input } from '@angular/core';

import { Flight } from '../../data-retriever/flight';

@Component({
  selector: 'app-total-flights-widget',
  templateUrl: './total-flights-widget.component.html',
  styleUrls: ['./total-flights-widget.component.css']
})
export class TotalFlightsWidgetComponent implements OnInit {
  @Input() flights: Flight[];

  constructor() { }

  ngOnInit() {
  }

}
