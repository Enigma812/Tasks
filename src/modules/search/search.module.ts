import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search.component';
import { PagingComponent } from './paging/paging.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchPageComponent,
    PagingComponent,
    ListComponent,
    FindComponent
  ]
})
export class SearchModule { }
