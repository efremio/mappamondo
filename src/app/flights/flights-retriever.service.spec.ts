/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightsRetrieverService } from './flights-retriever.service';

describe('FlightsRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsRetrieverService]
    });
  });

  it('should ...', inject([FlightsRetrieverService], (service: FlightsRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
