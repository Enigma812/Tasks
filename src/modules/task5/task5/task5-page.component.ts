import { Component } from '@angular/core';

import { e } from '../e.function';
import { p } from '../p.function';

@Component({
  selector: 'app-task5',
  templateUrl: './task5-page.component.html',
  styleUrls: [
    './task5-page.component.scss'
  ]
})
export class Task5PageComponent {
  public e = '';
  public pi = '';

  public calculateE(str: string): void {
    const n: number = Number.parseInt(str, 10);
    const eSum: number = e(n);;
    this.e = eSum.toString();
  }

  public calculatePi(str: string): void {
    const n: number = Number.parseInt(str, 10);
    const piSum: number = p(n);
    this.pi = piSum.toString();
  }
}
