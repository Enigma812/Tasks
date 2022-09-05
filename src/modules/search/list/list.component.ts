import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public items: Item[];

  @Output()
  public delete: EventEmitter<Item>;

  constructor() {
    this.items = [];
    this.delete = new EventEmitter<Item>();
  }

  public onDelete(item: Item): void {
    this.delete.emit(item)
  }
}
