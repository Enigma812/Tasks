import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
  private state: PagingState<string>;

  constructor() {
    this.state = {
      pageNumber: 1,
      pageSize: 10,
      total: 30,
      items: [
        'string1',
        'string2',
        'string3',
        'string4',
        'string5',
        'string6',
        'string7',
        'string8',
        'string9',
        'string10'
      ]
    };
    this._stateSubject = new BehaviorSubject<PagingState<string>>(this.state);
    this.state$ = this._stateSubject.asObservable();
   }

   public changePage(pageNumber: number): void {
    const response = this.getPage(pageNumber);
    this.state = {
      ...this.state,
      pageNumber: pageNumber,
      total: response.total,
      items: response.items
    }
    this._stateSubject.next(this.state);
   }

   private getPage(pageNumber: number): PageState<string> {
    // имитирует запрос на сервер.
    const items: string[] = [];
    for( let i = 1; i <= this.state.pageSize; i++) {
      const item = 'string' + (this.state.pageSize * (pageNumber - 1) + i);
      items.push(item);
    }
    return {
      total: 30,
      items: items
    };
   }
}
