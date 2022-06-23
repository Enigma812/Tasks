import { Component } from '@angular/core';

import { a } from '../a.function';
import { c } from '../c.function';

@Component({
  selector: 'app-task3',
  templateUrl: './task3-page.component.html',
  styleUrls: [
    './task3-page.component.scss'
  ]
})
export class Task3PageComponent {
  public resultA = '';
  public resultC = '';

  public calcTaks3(nStr: string, kStr: string): void {
    const n: number = Number.parseInt(nStr, 10);
    const k: number = Number.parseInt(kStr, 10);
    const sumA: number = a(n, k);
    const sumC: number = c(n, k);
    this.resultA = sumA.toString();
    this.resultC = sumC.toString();
  }

}
