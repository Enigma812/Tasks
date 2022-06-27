import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Task12RoutingModule } from './task12-routing.module';
import { Task12PageComponent } from './task12/task12-page.component';


@NgModule({
  declarations: [
    Task12PageComponent
  ],
  imports: [
    CommonModule,
    Task12RoutingModule
  ]
})
export class Task12Module { }
