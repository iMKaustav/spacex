import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'launch-programs',
    loadChildren: () => import('./launch-programs/launch-programs.module').then(m => m.LaunchProgramsModule)
  },
  { path: '**', redirectTo: 'launch-programs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }