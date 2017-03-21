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
    this.doughnutChartData = [0, 0, 0, 0];
    for (let f of this.flights) {
      if (f.flight_class == "economy") {
        this.doughnutChartData[0]++;
      } else if (f.flight_class == "economy+") {
        this.doughnutChartData[1]++;
      } else if (f.flight_class == "business") {
        this.doughnutChartData[2]++;
      } else if (f.flight_class == "first") {
        this.doughnutChartData[3]++;
      }
    }

  }

  public lineChartOptions: any = {
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

  public lineChartColors: Array<any> = [
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


  //doughnut
  public doughnutChartLabels: string[] = [' Economy', ' Economy +', ' Business', ' First'];
  private doughnutChartColors: any[] = [{ backgroundColor: ["#FFF59D", "#FFE082", "#FFCC80", "#FFAB91"] }];
  public doughnutChartData: number[];
  public doughnutChartOptions: any = {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      cornerRadius: 2,
      titleFontSize: 20
    }
  };

}