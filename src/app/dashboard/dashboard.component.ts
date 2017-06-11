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
  flightChartData: number[];
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;

  constructor(private _dashboardDataRetrieverService: DashboardDataRetrieverService) { }

  ngOnInit() {
    this._dashboardDataRetrieverService.getData()
      .subscribe(data => {
        this.flights = data.flights;
        this.airports = data.airports;

        //we have the data, let's build charts data
        this.buildYearChartData();
        this.buildClassChartData();
        this.buildReasonChartData();
      });
  }

  buildYearChartData() {
    //add all the flights and store the min and max year
    var minY = new Date().getFullYear();
    var maxY = new Date().getFullYear();
    this.flightChartData = [];
    this.flightChartData[minY] = 0; //put at least current year
    for (let f of this.flights) {
      var year = parseInt(f.date.split("-")[0]);
      if (this.flightChartData[year] == undefined) {
        this.flightChartData[year] = 0;
      }
      this.flightChartData[year]++;

      //find min and max
      if (year < minY) {
        minY = year;
      } else if (year > maxY) {
        maxY = year;
      }
    }

    //fill missing years with zeros
    for (var i = minY; i <= maxY; i++) {
      if (this.flightChartData[i] == undefined) {
        this.flightChartData[i] = 0;
      }
    }
    this.lineChartData = [{ data: this.flightChartData.slice(minY, maxY + 1), label: 'Flights' }];
    this.lineChartLabels = Object.keys(this.flightChartData);
  }

  buildClassChartData() {
    //build class chart
    this.classChartData = [0, 0, 0, 0];
    for (let f of this.flights) {
      if (f.flight_class == "economy") {
        this.classChartData[0]++;
      } else if (f.flight_class == "economy+") {
        this.classChartData[1]++;
      } else if (f.flight_class == "business") {
        this.classChartData[2]++;
      } else if (f.flight_class == "first") {
        this.classChartData[3]++;
      }
    }
  }

  buildReasonChartData() {
    //build class chart
    this.reasonChartData = [0, 0, 0];
    for (let f of this.flights) {
      if (f.flight_reason == "leisure") {
        this.reasonChartData[0]++;
      } else if (f.flight_reason == "business") {
        this.reasonChartData[1]++;
      } else {
        this.reasonChartData[2]++;
      }
    }
  }

  lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          maxTicksLimit: 6
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      cornerRadius: 2,
      displayColors: false,
      titleFontSize: 20
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 5,
        hitRadius: 5
      }
    }
  };

  lineChartColors: Array<any> = [
    { //primary
      backgroundColor: 'rgba(205,220,57,0.7)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1
    }
  ];


  //class chart
  classChartLabels: string[] = [' Economy', ' Economy +', ' Business', ' First'];
  classChartColors: any[] = [{ backgroundColor: ["#FFF59D", "#FFE082", "#FFCC80", "#FFAB91"] }];
  classChartData: number[];
  classChartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 10,
        fontFamily: 'Overpass',
        usePointStyle: true
      }
    },
    tooltips: {
      cornerRadius: 2,
      titleFontSize: 20
    }
  };

  //reason chart
  reasonChartLabels: string[] = [' Leisure', ' Business', ' Other'];
  reasonChartColors: any[] = [{ backgroundColor: ["#FFF59D", "#FFE082", "#FFCC80"] }];
  reasonChartData: number[];
  reasonChartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 10,
        fontFamily: 'Overpass',
        usePointStyle: true
      }
    },
    tooltips: {
      cornerRadius: 2,
      titleFontSize: 20
    }
  };

}