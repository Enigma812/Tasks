import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  @Input()
  public inputText: string;

  @Output()
  public find: EventEmitter<string>;


  constructor() {
    this.inputText = '';
    this.find = new EventEmitter<string>();
  }

  public onStringFind(): void {
    this.find.emit(this.inputText);
  }
}
