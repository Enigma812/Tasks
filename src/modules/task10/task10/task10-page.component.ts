import { Component } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10-page.component.html',
  styleUrls: [
    './task10-page.component.scss'
  ]
})
export class Task10PageComponent {
  public matrix: number[][] = [];

  public createMatrix(str: string): void {
    const n: number = Number.parseInt(str, 10);
    this.matrix = this.getMatrix(n);
  }

  private getMatrix(n: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < n; i = i + 1) {
      result[i] = [];
      for (let j = 0; j < n; j = j + 1) {
        if (i === 0 || j === 0) {
          result[i][j] = 1;
        } else {
          result[i][j] = result[i - 1][j] + result[i][j - 1];
        }
      }
    }
    return result;
  }

}
