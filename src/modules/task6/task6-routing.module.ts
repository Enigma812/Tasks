import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task6PageComponent } from './task6/task6-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task6PageComponent
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
export class Task6RoutingModule { }
