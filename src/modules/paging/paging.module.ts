import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagingRoutingModule } from './paging-routing.module';
import { PagingPageComponent } from './paging-page/paging.component';
import { PagingService } from './paging.service';


@NgModule({
  imports: [
    CommonModule,
    PagingRoutingModule
  ],
  declarations: [
    PagingPageComponent
  ],
  providers: [
    PagingService
  ]
})
export class PagingModule { }
