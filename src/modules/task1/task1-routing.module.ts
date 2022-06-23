import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task1PageComponent } from './task1-page/task1-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task1PageComponent
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
export class Task1RoutingModule { }
