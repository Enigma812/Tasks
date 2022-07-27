import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


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

  public state$: Observable<PageSearchState<number>>;
  public _state: PageSearchState<number>

  private _stateSubject: Subject<PageSearchState<number>>;

  constructor() {
    this._state = {
      pageNumber: 2,
      pageSize: 5,
      total: 50,
      items: [],
    };
    this._stateSubject = new BehaviorSubject<PageSearchState<number>>(this._state);
    this.state$ = this._stateSubject.asObservable();

  }
}
