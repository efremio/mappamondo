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











  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 10, 15, 35], label: 'Current year' },
    { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56], label: '2016' }
  ];

  options: any = {
    borderWidth: 10
  };


  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.8)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
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
