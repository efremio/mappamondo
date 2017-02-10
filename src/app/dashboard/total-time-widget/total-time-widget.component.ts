import { Component, OnInit, Input } from '@angular/core';

import { Flight } from '../../data-retriever/flight';

@Component({
  selector: 'app-total-time-widget',
  templateUrl: './total-time-widget.component.html',
  styleUrls: ['./total-time-widget.component.css']
})
export class TotalTimeWidgetComponent implements OnInit {
  @Input() flights: Flight[];

  constructor() { }

  ngOnInit() {
  }

  getTotalTime(): Time {
    var minutes: number = 0;
    for (var flight of this.flights) {
      var stringTime = flight.duration.split(":");
      minutes += Number(stringTime[0]) * 60;
      minutes += Number(stringTime[1]);
    }

    var time = new Time();
    time.hours = Math.trunc(minutes / 60);
    time.minutes = minutes % 60;
    return time;
  }

}

class Time {
  hours: number;
  minutes: number;
}