import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task4PageComponent } from './task4/task4-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task4PageComponent
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
export class Task4RoutingModule { }
