import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  public inputText: string;

  @Output()
  public add: EventEmitter<string>;

  constructor() { 
    this.inputText = '';
    this.add = new EventEmitter<string>();
  }

  public onStringAdd(): void {
    this.add.emit(this.inputText);
  }

}
