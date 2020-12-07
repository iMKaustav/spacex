import { TestBed } from '@angular/core/testing';

import { LaunchDataService } from './launch-data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { error } from 'protractor';

describe('LaunchDataService', () => {
  let httpTestingController: HttpTestingController;
  let launchDataService: LaunchDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LaunchDataService
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    launchDataService = TestBed.get(LaunchDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create LaunchDataService', () => {
    expect(LaunchDataService).toBeTruthy();
  });

  it('should call get all launch data list', () => {
    let launch_success;
    let land_success;
    let launch_year;
    launchDataService.getFilteredLaunches(launch_success, land_success, launch_year).subscribe(
      response => {
        expect(response).toBeTruthy();
      }
    );
    const req = httpTestingController.expectOne({ url: 'https://api.spacexdata.com/v3/launches' });
    req.flush([]);
    httpTestingController.verify();
    expect(req.request.method).toBe("GET");
  });

  it('should call get filtered launch data list', () => {
    let launch_success = 'true';
    let land_success = 'false';
    let launch_year = '2020';
    launchDataService.getFilteredLaunches(launch_success, land_success, launch_year);
  });
});