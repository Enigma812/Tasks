import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7-page.component.html',
  styleUrls: [
    './task7-page.component.scss'
  ]
})
export class Task7PageComponent {
  public snake: number[][] = [];
  public helix: number[][] = [];

  public createSnake(str: string): void {
    const n: number = Number.parseInt(str, 10);
    this.snake = this.getSnake(n);
  }

  public createHelix(str: string): void {
    const n: number = Number.parseInt(str, 10);
    this.helix = this.getHelix(n);
  }


  private getHelix(n: number): number[][] {
    const result: number[][] = [];
    let x = 0;
    let stepX = 1;
    let startX = 0;
    let endX: number = n - 1;
    let y = 0;
    let stepY = 0;
    let startY = 0;
    let endY: number = n - 1;
    for (let i = 0; i < n; i = i + 1) {
      result[i] = [];
    }
    for (let k = 1; k <= n * n; k = k + 1) {
      result[y][x] = k;
      if (x + stepX > endX) {
        stepX = 0;
        stepY = 1;
        startY = startY + 1;
      }
      if (y + stepY > endY) {
        stepX = -1;
        stepY = 0;
        endX = endX - 1;
      }
      if (x + stepX < startX) {
        stepX = 0;
        stepY = -1;
        endY = endY - 1;
      }
      if (y + stepY < startY) {
        stepX = 1;
        stepY = 0;
        startX = startX + 1;
      }


      x = x + stepX;
      y = y + stepY;
    }
    return result;
  }


  private getSnake(n: number): number[][] {
    const result: number[][] = [];
    let startJ = 0;
    let stepJ = 1;
    let k = 1;
    for (let i = 0; i < n; i = i + 1) {
      result[i] = [];
      for (let j = startJ; j < n && j >= 0; j = j + stepJ) {
        result[i][j] = k;
        k = k + 1;
      }
      stepJ = -stepJ;
      if (startJ === 0) {
        startJ = n - 1;
      } else {
        startJ = 0;
      }
    }


    return result;
  }
}
