// optional proprieties in interface using ?(question mark) after the name of prop
interface SquareConfig {
  width?: number;
  color?: string;
};
interface SquareConfig2 {
  width?: number;
  color?: string;
  [propName: string]: any;// this syntaxe for accepte several props of string type
};
interface SquareType {
  color: string; 
  area: number;
}
function makeSquare(config:SquareConfig): SquareType {
  let square: SquareType = { area: 100, color: 'white'};
  if (config.color) square.color = config.color;
  if (config.width) square.area = config.width * config.width;
  return square;
}
// in this case (line 25) a nice error displayed because the type is dont have a height as prop
// and to solve this case we can use assertion type adding "as SquareConfig" line 26
// or add a string index signature to the interface like SquareConfig2 to accepte several string props
// or assign a param to new variable like const obj = { /* here some props */}
//console.log(makeSquare({ color: 'pink', width: 2, height: 2 }));
//console.log(makeSquare({ color: 'pink', width: 2, height: 2} as SquareConfig));

// read only properties in interfaces and arrays
interface Coord {
  readonly x: number;
  readonly y: number;
};
const p1: Coord = { x: 15, y: 2};
//p1.x = 15;// this failed to compile because p1.x is readonly can't upcate
// readonly for arrays 
let arr: ReadonlyArray<number> = [1, 2, 3, 4];
let a: number[];
//a = arr;// fired an error to solve this we use type assertion a = arr as number[]

// Function type define a shape of function
interface SearchFunc {
  (str: string, sub: string): boolean;
}
// use the search function type to define a shape of function and the parms can renamed to defferent names
const searchFunction: SearchFunc = (str: string, substring: string) => str.search(substring) > -1;
console.log(
  searchFunction("string", 'sstr')
);
// we can too define a type for indexes like example below
// but in this case (index type) dont miss the fact when index
// is a type of number the values must be a subtype of string 
// see line 58 and whenever the index type is number than 
// we can use string as index and vice versa like indexTypes["10"] = "strng";
interface StringArr {
  [index: string]: string;
};
let indexTypes: StringArr;
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
  //[x: number]: Dog;
}
// this type fired an error because the index must be string type and her value is number type
interface NumberDictionary {
  [index: string]: number;
  length: number;    // ok, length is a number
  //name: string;      // error, the type of 'name' is not a subtype of the indexer
}
// to fix the error above we can add several types for props and separate theme by |
interface SeveralTypes {
  [index: string]: number | string;
  length: number;    // ok, length is a number
  name: string;
}
// and we can make index readonly to prevent assignement to their indices
interface ReadOnlyStringArr {
  readonly [index: number]: string;
}
let strArrRea: ReadOnlyStringArr = ['1222', "sss", ];
// strArrRea[4] =  '45'; // error

// here we can use interface as a contract for class and define props and methods
// note; the interface can describe just a public side of class
interface Clock {
  currentTime: Date;
  setTime(d: Date): void;
}
class DZTime implements Clock {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    this.currentTime = d;
  }
}
// deep in dive with interface and class 
// to implement an interface for class and define a constructor shape 
// that fired a nice error (because the constructor is statuc side not public) 
// so to avoid this see line 114

interface ClockConstructor {
  new(hour: number, minute: number);
}
interface ClockInterface {
  tick(): void;
}

const Clock: ClockConstructor = class clockMe implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
  tick(){
    console.log("tick tock");
  }
}

// extend interface 
interface Shape {
  color: string;
}
interface Surface {
  surface: number;
}
interface Square extends Shape, Surface {
  length: number;
}
let square: Square = {} as Square; // must initialize the value
square.color = 'blue';
square.length = 21;
square.surface = 21 * 21;

// hybrid types 
interface HybridTypes {
  (start: number): string;
  interval: number;
  reset():void;
}
function getCounter(): HybridTypes {
  let counter = (function (start:number) {}) as HybridTypes;
  counter.interval = 123;
  counter.reset = () => {console.log("reset")};
  return counter;
}
let Counter: HybridTypes = getCounter();
Counter(10);
Counter.reset();
Counter.interval = 5.9;
console.log("Counter", Counter.interval);

// interface extends class 
class Control {
  private state: any;
} 
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {
    console.log("button select");
  }
}
class TextArea extends Control {
  select() {
    console.log("textarea select");
  }
}
// this class below fired an error because implement an interface and this interface must implemented
// by a subtype of Control class who has a private prop dont exist in Input 
// so like that each interface extends a class this interface must implemented by a subtype of this class
// extended by this interface like this above 
class Input implements SelectableControl {
  select(){
    console.log("input select ");
  }
}
