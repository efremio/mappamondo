import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Flight } from './flight';

@Injectable()
export class FlightsRetrieverService {
  private _flightsUrl = "test-data/flights.json"; //todo change this with an URL

  constructor(private _http: Http) { }

  getFlights(): Observable<Flight[]> {
    return this._http.get(this._flightsUrl)
      .map((response: Response) => <Flight[]>response.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
