import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface PageState {
  pageSize: number;
  pageNumber: number;
  total: number;
}

export interface PageStateItems<TItem> {
  items: TItem[];
}

export interface PageSearchState<NewString> {
  pageSize: number;
  pageNumber: number;
  total: number;
  items: NewString [];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService{

  public state$: Observable<PageSearchState<string>>;
  
  private _stateSubject: Subject<PageSearchState<string>>;
  private _state: PageSearchState<string>

  constructor() {
    this._state = {
      pageNumber: 3,
      pageSize: 5,
      total: 50,
      items: [],
    };
    this._stateSubject = new BehaviorSubject<PageSearchState<string>>(this._state);
    this.state$ = this._stateSubject.asObservable();

  }

  public getPage({pageNumber, pageSize}: PageSearchState<string>): PageStateItems<string> {
    const items: string[] = [];
    for(let i = 1; i <= pageSize; i++) {
      const item = 'Строка' + (pageSize * (pageNumber - 1) + i);
      items.push(item);
    }
    return {
      items: items
    }
  }
}
