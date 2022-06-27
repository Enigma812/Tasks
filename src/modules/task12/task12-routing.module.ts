import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task12PageComponent } from './task12/task12-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task12PageComponent
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
export class Task12RoutingModule { }
