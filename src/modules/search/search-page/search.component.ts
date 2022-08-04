import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PageState } from '../search.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent {

  public pageState$: Observable<PageState>;
  public items$: Observable<string[]>;

  private readonly _searchStore: SearchService;

  constructor(searchPage: SearchService) {
    this._searchStore = searchPage;
    this.pageState$ = this._searchStore.state$.pipe(
      map((state) => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        total: state.total
      }))
    );
      
    this.items$ = this._searchStore.state$.pipe(
      map((state) => state.items)
    ); 
  }
}
