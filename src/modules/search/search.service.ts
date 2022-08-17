import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface PageState {
  pageSize: number;
  pageNumber: number;
  total: number;
}

export interface FindString {
  find: string;
}

export interface PageSearchState<NewString> {
  pageSize: number;
  pageNumber: number;
  total: number;
  items: NewString [];
  find: NewString;
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
      items: this._getPage(this._state)
    };
    this._stateSubject.next(this._state);
  }


  public changePage(state: PageState): void {
    this._state = {
      ...this._state,
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      items: this._getPage(state)
    };
    this._stateSubject.next(this._state);
  };

  public findString(state: FindString): string {
    return state.find
  };
  

  private _getPage({ pageNumber, pageSize }: PageState): string[] {
  // public getPage(state: PageSearchState<string>): PageStateItems<string> {  классическая запись верхней строчки, без деструктуризации параметров.
  //   const pageNumber = state.pageNumber;
  //   const pageSize = state.pageSize;
    const items: string[] = [];
    const firstItemOnPage = (pageNumber - 1) * pageSize;
    for(let i = 1; i <= pageSize; i++) {
      const item = 'Строка ' + (firstItemOnPage + i);
      items.push(item);
    };
    const find: string = '';
    if (find === this.findString(find)) {
      items.push(find);
      return items
    }
    return items
  };
}
