import { Component } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  public inputText: string;

  private readonly _searchStore: SearchService;


  constructor(searchService: SearchService) {
    this._searchStore = searchService;
    this.inputText = '';
  }

  public stringFind(): void {
    this._searchStore.findString(this.inputText);
  }
}
