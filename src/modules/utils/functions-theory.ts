function srq(x: number): number {
  return x * x;
  // return x**2;
  // return Math.pow(x, 2);
}

// const arrowSqr: (x: number) => number = (x: number) => {
const arrowSqr = (x: number) => x * x;

function map(array: number[], mapFn: (value: number) => number) {
  // const result: number[] = [];
  // for(let i = 0; i < array.length; i++) {
  //     result.push(mapFn(array[i]));
  // }
  // return result;
  return array.map(mapFn);
}

function add(term: number): (value: number) => number {
  const result: (value: number) => number = (value) => value + term;
  return result;
  return (value) => value + term;
}

function testAdd(): void {
  const threePlusTwo = add(2)(3);
}

function arraySum(arr: number[]): number {
  let sum = 0;
  // const sumFn = (value: number) => {
  //     sum = sum + value
  // };
  // arr.forEach(sumFn);
  arr.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}

function getOdds(array: number[]): number[] {
  return array.filter(
    (value) => value % 2 === 0
    // if(value % 2 === 0) {
    //     return false;
    // } else {
    //     return true;
    // }
  );
  return array.filter((value) => value % 2 === 1);
}

function getDoubles(array: number[]): number[] {
  return array.map((value: number) => value * 2);
}

function contains(array: number[], search: number): boolean {
  const found = array.find((value: number) => value === search);
  return found !== undefined;

  return array.includes(search);
}
