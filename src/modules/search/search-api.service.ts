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
    this._db = this._db.concat({
      id: this._db.length + 1,
      text: text
    });
    return this._db.length;
  }

  public deleteItem(item: Item): void {
    // this._db = this._db.filter((value) => value !== item); сравнение, которое лучше не использовать для объектов
    this._db = this._db.filter((value) => value.id !== item.id);
  }

  public editItem(editItem: Item): void {
    // const found = this._db.find((value) => value.id === editItem.id); как вариант, но это мутация элемента массива
    // if (found !== undefined) {
    //   found.text = editItem.text;
    // }
    const foundIndex = this._db.findIndex((value) => value.id === editItem.id);
    if (foundIndex !== -1) {
      this._db[foundIndex] = editItem;
    }
  }
}