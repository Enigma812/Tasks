import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PageSearchState, PageState, PageStateItems } from '../search.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent {

  public pageState$: Observable<PageState>;
  public items$: Observable<PageStateItems<string>>;

  private readonly _searchPage: SearchService;

  constructor(searchPage: SearchService) {
    this._searchPage = searchPage;
    this.pageState$ = this._searchPage.state$.pipe(
      map((state) => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        total: state.total
      }))
    );
      
    this.items$ = this._searchPage.state$.pipe(
      map((item) => ({
        items: item.items
      }))
    );
    
  }

//   public items(item: PageSearchState<string>): void {
//     this._searchPage.getPage(item);
//   }
}
