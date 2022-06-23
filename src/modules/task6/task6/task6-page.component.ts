import { Component } from '@angular/core';

import { cube } from '../cube.function';
import { sqr } from '../sqr.function';

@Component({
  selector: 'app-task6',
  templateUrl: './task6-page.component.html',
  styleUrls: [
    './task6-page.component.scss'
  ]
})
export class Task6PageComponent {
  public sqr = '';
  public array: number[] = [];
  public cube = '';
  public arrayCube: number[] = [];

  public calcSqr(str: string): void {
    const n: number = Number.parseInt(str, 10);
    this.sqr = sqr(n).toString();
    this.array = [];
    for (let i = 1; i <= n; i += 1) {
      this.array.push(i);
    }
  }

  public sqrBack(n: number): number {
    return sqr(n);
  }


  public cubeSum(str: string): void {
    const n: number = Number.parseInt(str, 10);
    this.cube = cube(n).toString();
    this.arrayCube = [];
    for (let i = 1; i <= n; i += 1) {
      this.arrayCube.push(i);
    }
  }

  public cubeBack(n: number): number {
    return cube(n);
  }

}
