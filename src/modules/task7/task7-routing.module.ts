import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task7PageComponent } from './task7/task7-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task7PageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Task7RoutingModule { }
