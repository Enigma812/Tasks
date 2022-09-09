import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from './models/item';
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

  public state$: Observable<PageSearchState<Item>>;

  private _stateSubject: Subject<PageSearchState<Item>>;
  private _state: PageSearchState<Item>;

  private readonly _api: SearchApiService;


  constructor(api: SearchApiService) {
    this._api = api;
    this._state = {
      find: '',
      pageNumber: 7,
      pageSize: 5,
      total: 0,
      items: []
    };
    this._stateSubject = new BehaviorSubject<PageSearchState<Item>>(this._state);
    this.state$ = this._stateSubject.asObservable();
    const response = this._api.getPage({
      pageNumber: this._state.pageNumber,
      pageSize: this._state.pageSize,
      find: this._state.find
    });
    this._state = {
      ...this._state,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }


  public changePage(request: PageRequest): void {
    const response = this._api.getPage({
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      find: this._state.find
      // find: request.find !== undefined
      //   ? request.find
      //   : this._state.find
    });
    this._state = {
      ...this._state,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }

  public findString(find: string): void {
    const response = this._api.getPage({
      pageNumber: 1,
      pageSize: this._state.pageSize,
      find: find
    });
    this._state = {
      ...this._state,
      find: find,
      pageNumber: 1,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }

  public addString(add: string): void {
    const total = this._api.addItem(add);
    const lastPageNumber = Math.ceil(total / this._state.pageSize);
    const response = this._api.getPage({
      pageNumber: lastPageNumber,
      pageSize: this._state.pageSize,
      find: ''
    });
    this._state = {
      ...this._state,
      find: '',
      pageNumber: lastPageNumber,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }

  public deleteItem(item: Item): void {
    this._api.deleteItem(item);
    const response = this._api.getPage({
      pageNumber: this._state.pageNumber,
      pageSize: this._state.pageSize,
      find: this._state.find
    });
    this._state = {
      ...this._state,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }

  public editItem(editItem: Item): void {
    this._api.editItem(editItem);
    const response = this._api.getPage({
      pageNumber: this._state.pageNumber,
      pageSize: this._state.pageSize,
      find: this._state.find
    });
    this._state = {
      ...this._state,
      items: response.items,
      total: response.total
    };
    this._stateSubject.next(this._state);
  }
}
