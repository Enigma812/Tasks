import { Injectable } from '@angular/core';
import { Item } from './models/item';

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

  private _db: Item[];

  constructor() {
    const total: number = 73;
    this._db = [];
    for (let i = 1; i <= total; i++) {
      const text = 'Строка ' + i;
      this._db.push({
        id: i,
        text: text
      });
    };
  }

  public getPage({ pageNumber, pageSize, find }: PageRequest): PageResponse<Item> {
    // public getPage(state: PageSearchState<string>): PageStateItems<string> {  классическая запись верхней строчки, без деструктуризации параметров.
    //   const pageNumber = state.pageNumber;
    //   const pageSize = state.pageSize;
    const firstItemOnPage = (pageNumber - 1) * pageSize;
    if (find !== undefined) {
      const found = this._db.filter((item) => item.text.includes(find));
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

  public addItem(text: string): number {
    if (text !== undefined) {
      this._db = this._db.concat({
        id: this._db.length,
        text: text
      });
    }
    return this._db.length;
  }

  public deleteItem(item: Item): void {
    if (item !== undefined) {
      // this._db = this._db.filter((value) => value !== item); сравнение, которое лучше не использовать для объектов
      this._db = this._db.filter((value) => value.id !== item.id);
    }
  }

  
}

