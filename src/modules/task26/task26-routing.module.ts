import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task26PageComponent } from './task26/task26-page.component';

const routes: Routes = [
  {
    path: '',
    component: Task26PageComponent
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
export class Task26RoutingModule { }
