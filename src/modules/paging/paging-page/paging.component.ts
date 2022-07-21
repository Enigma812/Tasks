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
  public active: boolean = false;
  public total$: Observable<number>;
  public act$: Observable<number>

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

    this.total$ = this._pagingService.state$.pipe(
      map((state) => state.total)
    )

    this.act$ = this._pagingService.state$.pipe(
      map((state) => state.pageNumber)
    )
  }

  public changePage(pageNumber: number): void {
    this._pagingService.changePage(pageNumber);
  }

  // public activeButton(page: Observable<number>): boolean {
  //     if(page = this.act$) {}
  //     return this.active = true;
  //   }
  

    public activeButton(): void {
      this.active = true;
    }
}
