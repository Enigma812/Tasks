import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task5PageComponent } from './task5/task5-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task5PageComponent
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
export class Task5RoutingModule { }
