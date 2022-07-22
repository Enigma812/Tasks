import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Page {
  pageNumber: number;
  pageSize: number;
}

export interface PageState<TItem> {
  total: number;
  items: TItem[];
}

export interface PagingState<TItem> {
  pageNumber: number;
  pageSize: number;
  total: number;
  items: TItem[];
}

@Injectable()
export class PagingService {

  public state$: Observable<PagingState<string>>;

  private _stateSubject: Subject<PagingState<string>>;
  private _state: PagingState<string>;

  constructor() {
    this._state = {
      pageNumber: 1,
      pageSize: 7,
      total: 0,
      items: []
    };
    this._stateSubject = new BehaviorSubject<PagingState<string>>(this._state);
    this.state$ = this._stateSubject.asObservable();
    this.changePage(this._state);
   }

   public changePage(page: Page): void {
    const response = this.getPage(page);
    this._state = {
      ...this._state,
      // ...page если много полей и все они нужны.
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      total: response.total,
      items: response.items
    }
    this._stateSubject.next(this._state);
   }

   private getPage({ pageNumber, pageSize }: Page): PageState<string> {
    // имитирует запрос на сервер.
    const items: string[] = [];
    for(let i = 1; i <= pageSize; i++) {
      const item = 'string' + (pageSize * (pageNumber - 1) + i);
      items.push(item);
    }
    return {
      total: Math.round(Math.random() * 30) + 50,
      items: items
    };
   }
}
