import { Component } from '@angular/core';

const ascSort = (left: number, right: number) => left < right ? -1 : left === right ? 0 : 1;
const descSort = (left: number, right: number) => left < right ? 1 : left === right ? 0 : -1;
const descSort2 = (left: number, right: number) => -ascSort(left, right);

@Component({
  selector: 'app-task12',
  templateUrl: './task12-page.component.html',
  styleUrls: [
    './task12-page.component.scss'
  ]
})
export class Task12PageComponent {
  public inputArray: number[] = [];
  public sortArray: number[] = [];
  public reverseArray: number[] = [];
  public sumArray: number[] = [];
  public sumArray2: number[] = [];
  public indexArray: number[][] = [];

  constructor() {
    const input = new Array(10).fill(0).map(() => Math.round(Math.random() * 50 + 50));
    this.inputArray = input;
    this.sortArray = this.bubbleSort(this.inputArray);
    this.reverseArray = this.reverse(this.inputArray);
    this.sumArray = this.sumStartEndArray(this.sortArray);
    this.sumArray2 = this.sumStartEndArray2(this.sortArray);
    this.indexArray = this.indexArr(this.sortArray);
  }

  private bubbleSort(array: number[]): number[] {
    // const result: number[] = [...array];
    // let swapCount: number;
    // do {
    //   swapCount = 0;
    //   for (let i = 0; i < result.length - 1; i = i + 1) {
    //     const first = result[i];
    //     const second = result[i + 1];
    //     if (first > second) {
    //       result[i] = second;
    //       result[i + 1] = first;
    //       swapCount = swapCount + 1;
    //     }
    //   }
    // } while (swapCount !== 0);
    // return result;
    const result: number[] = [...array];
    return result.sort(ascSort);
  }





  private reverse(array: number[]): number[] {
    // const newArray: number[] = [];
    // const n: number = array.length;
    // for (let i = 0; i < array.length; i = i + 1) {
    //   newArray[n - 1 - i] = array[i];
    // }
    // return newArray;
    const result: number[] = [...array];
    result.reverse();
    return result;
  } 

  private sumStartEndArray(array: number[]): number [] {
    let n: number = array.length;
    let result: number[] = [];
    for (let i = 0; i < n; i = i + 1) {
      const start = array[i];
      const end = array[n - 1 - i];
      result[i] = start + end;
    }
    return result;
  }

  private sumStartEndArray2(array: number[]): number [] {
    let n: number = array.length;
    let result: number[] = [];
    for (let i = 0, j = n - 1; i < n; i = i + 1, j = j - 1) {
      const start = array[i];
      const end = array[j];
      result[i] = start + end;
    }
    return result;
  }

  private indexArr(arr: number[]): number[][] {
    // const result: number[][] = [];
    // let n: number = arr.length;
    // for ( let i = 0; i < n; i = i + 1) {
    //   let x = [i, arr[i]];
    //   result[i] = x;
    // }
    // return result;
    return arr.map((value, index) => [index, value]);
  }
  
}
