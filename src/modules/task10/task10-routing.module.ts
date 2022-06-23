import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task10PageComponent } from './task10/task10-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task10PageComponent
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
export class Task10RoutingModule { }
