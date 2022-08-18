import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PageRequest, SearchApiService } from './search-api.service';

export interface PageSearchState<TItem> {
  pageSize: number;
  pageNumber: number;
  total: number;
  items: TItem[];
  find: string;
}

@Injectable()
export class SearchService {

  public state$: Observable<PageSearchState<string>>;

  private _stateSubject: Subject<PageSearchState<string>>;
  private _state: PageSearchState<string>;

  private readonly _api: SearchApiService;


  constructor(api: SearchApiService) {
    this._api = api;
    this._state = {
      pageNumber: 7,
      pageSize: 5,
      total: 50,
      items: [],
      find: ''
    };
    this._stateSubject = new BehaviorSubject<PageSearchState<string>>(this._state);
    this.state$ = this._stateSubject.asObservable();
    this._state = {
      ...this._state,
      items: this._api.getPage(this._state)
    };
    this._stateSubject.next(this._state);
  }


  public changePage(request: PageRequest): void {
    this._state = {
      ...this._state,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      items: this._api.getPage(request)
    };
    this._stateSubject.next(this._state);
  }

  public findString(find: string): void {
    this._state = {
      ...this._state,
      find: find,
      pageNumber: 1,
      items: this._api.getPage(this._state)
    };
    this._stateSubject.next(this._state);
  }
}
