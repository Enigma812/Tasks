import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagingPageComponent } from './paging-page/paging.component';

const routes: Routes = [{ path: '', component: PagingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagingRoutingModule { }
