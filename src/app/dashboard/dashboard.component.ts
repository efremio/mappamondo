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
        this.buildChartData();
      });
  }

  buildChartData() {
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

    /*for (let p of Object.keys(this.flightChartData)) {
      console.log(p + ": " + this.flightChartData[p]);
    }*/

    this.lineChartData = [{ data: this.flightChartData.slice(minY, maxY + 1), label: 'Flights' }];
    this.lineChartLabels = Object.keys(this.flightChartData);
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
      titleFontSize: 20,
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
    { // primary
      backgroundColor: 'rgba(205,220,57,0.7)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }





}