import { Injectable } from '@angular/core';

export interface PageRequest {
  pageNumber: number;
  pageSize: number;
  find?: string;
}

export interface PageResponse<TItem> {
  total: number;
  items: TItem[]
}

@Injectable()
export class SearchApiService {

  private _db: string[];

  constructor() {
    const total: number = 73;
    this._db = [];
    for (let i = 1; i <= total; i++) {
      const item = 'Строка ' + i;
      this._db.push(item);
    };
  }

  public getPage({ pageNumber, pageSize, find }: PageRequest): PageResponse<string> {
    // public getPage(state: PageSearchState<string>): PageStateItems<string> {  классическая запись верхней строчки, без деструктуризации параметров.
    //   const pageNumber = state.pageNumber;
    //   const pageSize = state.pageSize;
    const firstItemOnPage = (pageNumber - 1) * pageSize;
    if (find !== undefined) {
      const found = this._db.filter((item) => item.includes(find));
      return {
        total: found.length,
        items: found.slice(firstItemOnPage, firstItemOnPage + pageSize)
      }
    }
    return {
      total: this._db.length,
      items: this._db.slice(firstItemOnPage, firstItemOnPage + pageSize)
    };
  };

  public addItem(item: string): number {
    if (item !== undefined) {
      this._db = this._db.concat(item);
    }
    return this._db.length;
  }
}

