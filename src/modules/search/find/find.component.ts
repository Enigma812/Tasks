import { Component } from '@angular/core';
import { FindString, SearchService } from '../search.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  public inputText: string;
  public test: string;

  private readonly _searchStore: SearchService;


  constructor(searchService: SearchService) {
    this._searchStore = searchService;
    this.inputText = '';
    this.test = '';
  }

  public clickFind(text: string): string {
    this.test = text;
    return this.test;
  }

  public stringFind(findString: FindString): void {
    findString = this.test
    this._searchStore.findString(findString);
    
  }
}
