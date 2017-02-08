/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardDataRetrieverService } from './dashboard-data-retriever.service';

describe('DashboardDataRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardDataRetrieverService]
    });
  });

  it('should ...', inject([DashboardDataRetrieverService], (service: DashboardDataRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
