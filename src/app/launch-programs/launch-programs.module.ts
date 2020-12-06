import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { RouterModule, Routes } from '@angular/router';

const launchRoutes: Routes = [
  { path: '', component: LaunchListComponent }
];
@NgModule({
  declarations: [
    LaunchListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(launchRoutes),
    MaterialModule
  ]
})
export class LaunchProgramsModule { }
