function minMaxObj(a: number, b: number, c: number): { min: number, max: number } {
    const array: number[] = [a, b, c];
    array.sort();
    return { min: array[0], max: array[2]};
}

function minMaxArr(a: number, b: number, c: number): [ number, number ] {
    const array: number[] = [a, b, c];
    array.sort();
    return [ array[0], array[2] ];
}

const testArr = minMaxArr(42, 27, 15);
const minA = testArr[0];
const maxA = testArr[1];

const [minArr, maxArr] = testArr;


const testObj = minMaxObj(55, 18, 28);
const minObj = testObj.min;
const maxObj = testObj.max;

const { min, max } = testObj;
const { min: minO, max: maxO } = testObj;





function printObj( obj: { min: number, max: number }): void {
    console.log('min = ' + obj.min);
    console.log('max = ' + obj.max);   
} 

function printObjDestr({ min, max }: { min: number, max: number }): void {
    console.log('min = ' + min);
    console.log('max = ' + max);   
} 

printObjDestr({ min: 5, max: 80 });

function printTuple(tuple: [number, number]): void {
    console.log('min = ' + tuple[0]);
    console.log('max = ' + tuple[1]);
}

function printTupleDestr([min, max]: [number, number]): void {
    console.log('min = ' + min);
    console.log('max = ' + max);
}

const arrowPrintTuple = ([min, max]: [number, number]) => {
    console.log('min = ' + min);
    console.log('max = ' + max);
 }