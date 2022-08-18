import { Injectable } from '@angular/core';

export interface PageRequest {
  pageNumber: number;
  pageSize: number;
  find?: string;
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

  public getPage({ pageNumber, pageSize, find }: PageRequest): string[] {
    // public getPage(state: PageSearchState<string>): PageStateItems<string> {  классическая запись верхней строчки, без деструктуризации параметров.
    //   const pageNumber = state.pageNumber;
    //   const pageSize = state.pageSize;
    const firstItemOnPage = (pageNumber - 1) * pageSize;
    if (find !== undefined) {
      const found = this._db.filter((item) => item.includes(find));
      return found.slice(firstItemOnPage, firstItemOnPage + pageSize);
    }
    return this._db.slice(firstItemOnPage, firstItemOnPage + pageSize);
  };
}

