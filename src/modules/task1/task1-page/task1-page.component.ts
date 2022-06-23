import { Component } from '@angular/core';

import { factorialRecursive } from '../factorial-recursive.function';
import { factorial } from '../factorial.function';

@Component({
  templateUrl: './task1-page.component.html',
  styleUrls: [
    './task1-page.component.scss'
  ]
})
export class Task1PageComponent {
  public result1 = '';
  public result2 = '';
  public input = '';

  public calc(str: string): void {
    const n: number = Number.parseInt(str, 10);
    const fact: number = factorial(n);
    this.result1 = fact.toString();
  }

  public calcNgModel(): void {
    const n: number = Number.parseInt(this.input, 10);
    const fact: number = factorialRecursive(n);
    this.result2 = fact.toString();
  }
}

