import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public items$: Observable<string[]>;

  private readonly _searchStore: SearchService;

  constructor(searchService: SearchService) { 
    this._searchStore = searchService;
    this.items$ = this._searchStore.state$.pipe(
      map((state) => state.items)
    ); 
  }

}
