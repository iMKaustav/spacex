import { LaunchModel } from './../../models/launch.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {

  constructor(public http: HttpClient) { }
  
  getFilteredLaunches(launch_success, land_success, launch_year): Observable<LaunchModel[]> {
    let params = new HttpParams();
    params.set('limit', '100');
    if (launch_success) {
      params = params.append('launch_success', launch_success+'');
    }
    if (land_success) {
      params = params.append('land_success', land_success+'');
    }
    if (launch_year) {
      params = params.append('launch_year', launch_year+'');
    }
    return this.http.get<LaunchModel[]>('https://api.spacexdata.com/v3/launches', { params: params }).pipe(
      map(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
