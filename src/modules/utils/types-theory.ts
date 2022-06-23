// примитивы

let b: boolean; // false или true
let n: number; // число целове или дробное
let s: string; // строка
let a: any;  // любой тип

let array: number[]; // числовой массив []
let obj: { id: number; name: string }; // объекты со свойствами и методами

let fn: (x: number) => number; // функция


//создание своих типов Union types

type StringOrNumber = string | number; // перечисление типов (или то или другое)
let sn: StringOrNumber;
type State = 'defined' | 'undefined';
type Order = 42 | 58 | 37 | 25;
const o: Order = 37;

interface Id { id: number }
interface Name { name: string }
type IdName = Id & Name;           // объединение типов (и то и другое)
const objIdName: IdName = {
  id: 42,
  name: 'John'
};


//Литеральные типы   не общие примитивы (string, number, boolean), а конкретные значения

type Success = 'success';
type Failed = 'failed';
type Status = Success | Failed;
const st: Status = 'success';


// Обобщенные типы (генерик)

type Arr<T> = T[];
let numbers: Arr<number>; // numbers: number[]
let strings: Arr<string>; // strings: string[]

//генерик объектов

interface GenIdName<TId, TName> { id: TId; name: TName }
const genIdName: GenIdName<number, string> = {
  id: 42,
  name: 'John'
};

const genIdName2: GenIdName<string, 'John' | 'Sarah'> = {
  id: 'dsfsd',
  name: 'John'
};

// генерик функций

type SortFn<T> = (array: T[]) => T[];

const sortNumbers: SortFn<number> = (arr) => arr.sort();
const sortStrings: SortFn<string> = (arr) => arr.sort();


