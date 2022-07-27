import { Component } from '@angular/core';
import { PageSearchState } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent {

  public test: number;

  constructor() {
    this.test = 5
  }
}
