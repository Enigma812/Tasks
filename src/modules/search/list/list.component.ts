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

  @Output()
  public saveEdit: EventEmitter<Item>;

  public isShown = false;
  public textEdit = '';
  public idEdit = 0;


  constructor() {
    this.items = [];
    this.delete = new EventEmitter<Item>();
    this.saveEdit = new EventEmitter<Item>();
  }


  public onDelete(item: Item): void {
    this.delete.emit(item)
  }

  public onEdit(item: Item): void {
    this.isShown = true;
    this.textEdit = item.text;
    this.idEdit = item.id;
  }

  public onSave(): void {
    this.saveEdit.emit({
      id: this.idEdit,
      text: this.textEdit
    });
    this.isShown = false;
  }

}
