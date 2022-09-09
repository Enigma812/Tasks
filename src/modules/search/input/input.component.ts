import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  public inputText: string;
  public invalid: boolean;

  @Output()
  public add: EventEmitter<string>;

  constructor() {
    this.inputText = '';
    this.invalid = false;
    this.add = new EventEmitter<string>();
  }

  public onStringAdd(): void {
    if (this.inputText !== '') {
      this.add.emit(this.inputText);
      this.inputText = '';
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }

  public onChange(): void {
    if (this.inputText !== '') {
      this.invalid = false;
    }
  }
}
