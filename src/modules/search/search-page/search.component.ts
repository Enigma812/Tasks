import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { PageRequest } from '../search-api.service';
import { PageSearchState } from '../search.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent {

  public pageState$: Observable<PageSearchState<Item>>;
  private readonly _searchStore: SearchService;


  constructor(searchService: SearchService) {
    this._searchStore = searchService;
    this.pageState$ = this._searchStore.state$;
  }


  public pageChange(request: PageRequest): void {
    this._searchStore.changePage(request);
  }

  public onFind(findString: string): void {
    this._searchStore.findString(findString);
  }

  public onClear(): void {
    this._searchStore.findString('');
    // this._searchStore.changePage({  более грамоздский спобос
    //   pageNumber: 1,
    //   pageSize: pageSize,
    //   find: ''
    // })
  }

  public onAdd(addString: string): void {
    this._searchStore.addString(addString);
  }

  public onDelete(item: Item): void {
    this._searchStore.deleteItem(item);
  }

  public onSave(editItem: Item): void {
    this._searchStore.editItem(editItem);
  }
}
