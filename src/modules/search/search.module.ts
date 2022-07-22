import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search.component';
import { PagingComponent } from './paging/paging.component';


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchPageComponent,
    PagingComponent
  ]
})
export class SearchModule { }
