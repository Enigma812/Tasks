import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public items: Item[];

  constructor() {
    this.items = [];
  }

}
