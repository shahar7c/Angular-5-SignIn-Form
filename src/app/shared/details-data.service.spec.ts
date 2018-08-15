import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DetailsDataService } from './details-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DetailsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        DetailsDataService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([DetailsDataService], (service: DetailsDataService) => {
    expect(service).toBeTruthy();
  }));
});
