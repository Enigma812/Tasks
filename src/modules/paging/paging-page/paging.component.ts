import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingPageComponent {

  public items$: Observable<string[]>;
  public buttons$: Observable<number[]>;

  constructor(
    private readonly _pagingService: PagingService
  ) {
    this.items$ = this._pagingService.state$.pipe(
      map((state) => state.items)
    )
    this.buttons$ = this._pagingService.state$.pipe(
      map((state) => {
        const pagesCount = Math.ceil(state.total / state.pageSize);
        let arrButtons = [];
        for (let i = 1; i <= pagesCount; i++) {
          arrButtons.push(i);
        }
        return arrButtons;
      })
    )
  }

  public changePage(pageNumber: number): void {
    this._pagingService.changePage(pageNumber);
  }
}
