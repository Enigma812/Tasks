import { Component } from '@angular/core';

@Component({
  selector: 'app-task26',
  templateUrl: './task26-page.component.html',
  styleUrls: [
    './task26-page.component.scss'
  ]
})
export class Task26PageComponent {
  public result = 0;

  public lines(strA: string, strB: string): void {
    const a: number = Number.parseInt(strA, 10);
    const b: number = Number.parseInt(strB, 10);
    this.result = this.calcLines(a, b);
  }

  private calcLines(a: number, b: number): number {
    let linesCount = 0;
    let x = 0;
    let y = 0;
    let stepX = 1;
    let stepY = 1;
    do {
      let edge = false;
      x = x + stepX;
      y = y + stepY;
      if (x === 0 || x === b) {
        stepX = -stepX;
        edge = true;
      }
      if (y === 0 || y === a) {
        stepY = -stepY;
        edge = true;
      }
      if (edge) {
        linesCount = linesCount + 1;
      }
    } while (
      !(x === 0 && y === 0) && !(x === 0 && y === a) && !(x === b && y === a) && !(x === b && y === 0)
    );

    return linesCount;
  }

}
