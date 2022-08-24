import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search.component';
import { PagingComponent } from './paging/paging.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { SearchApiService } from './search-api.service';
import { InputComponent } from './input/input.component';


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
    FindComponent,
    InputComponent
  ],
  providers: [
    SearchService,
    SearchApiService
  ]
})
export class SearchModule { }
