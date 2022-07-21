import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page, PagingService } from '../paging.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingPageComponent {

  public items$: Observable<string[]>;
  public buttons$: Observable<number[]>;
  public page$: Observable<Page>;
  public total$: Observable<number>;
  public start$: Observable<number>;
  public finish$: Observable<number>;

  constructor(
    private readonly _pagingService: PagingService
  ) {
    this.items$ = this._pagingService.state$.pipe(
      map((state) => state.items)
    );

    this.buttons$ = this._pagingService.state$.pipe(
      map((state) => {
        const pagesCount = Math.ceil(state.total / state.pageSize);
        let arrButtons = [];
        for (let i = 1; i <= pagesCount; i++) {
          arrButtons.push(i);
        }
        return arrButtons;
      })
    );

    this.total$ = this._pagingService.state$.pipe(
      map((state) => state.total)
    );

    this.page$ = this._pagingService.state$.pipe(
      map((state) => ({ 
        pageNumber: state.pageNumber, 
        pageSize: state.pageSize 
      }))
    );

    this.start$ = this._pagingService.state$.pipe(
      map((state) => state.pageSize * (state.pageNumber - 1) + 1)
    );

    this.finish$ = this._pagingService.state$.pipe(
      map((state) => state.pageSize * state.pageNumber)
    );
  }

  public changePage(page: Page): void {
    this._pagingService.changePage(page);
  }
}
