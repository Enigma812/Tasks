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

  private readonly _searchStore: SearchService;

  constructor(searchService: SearchService) {
    this._searchStore = searchService;
    this.pageState$ = this._searchStore.state$.pipe(
      map((state) => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        total: state.total
      }))
    );
  }

  public pageChange(pageState: PageState): void {
    this._searchStore.changePage(pageState);
  }
}
