import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { DashboardData } from './dashboard-data';

@Injectable()
export class DashboardDataRetrieverService {
  private _dashboardDataUrl = "test-data/dashboard-data.json"; //todo change this with an URL

  constructor(private _http: Http) { }

  getData(): Observable<DashboardData> {
    return this._http.get(this._dashboardDataUrl)
      .map((response: Response) => <DashboardData>response.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
