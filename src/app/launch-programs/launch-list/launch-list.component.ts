import { LaunchModel } from './../../models/launch.model';
import { LaunchDataService } from './../../services/launches/launch-data.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  launchList: LaunchModel[];
  launch_success: any;
  land_success: any;
  launch_year: any;

  constructor(public launchDataService: LaunchDataService) { }

  ngOnInit() {
    this.launchDataService.getFilteredLaunches(this.launch_success, this.land_success, this.launch_year)
        .subscribe(x => this.launchList = x );
  }

  yearSelected(change: MatButtonToggleChange){
    this.launch_year = change.value;
    this.launchDataService.getFilteredLaunches(this.launch_success, this.land_success, this.launch_year)
        .subscribe(x => this.launchList = x );
  }

  launchSuccessSelected(change: MatButtonToggleChange){
    this.launch_success = change.value + '';
    this.launchDataService.getFilteredLaunches(this.launch_success, this.land_success, this.launch_year)
        .subscribe(x => this.launchList = x );
  }

  landSuccessSelected(change: MatButtonToggleChange){
    this.land_success = change.value + '';
    this.launchDataService.getFilteredLaunches(this.launch_success, this.land_success, this.launch_year)
        .subscribe(x => this.launchList = x );
  }
}