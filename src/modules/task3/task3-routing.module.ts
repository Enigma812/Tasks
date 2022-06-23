import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task3PageComponent } from './task3-page/task3-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task3PageComponent
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
export class Task3RoutingModule { }
