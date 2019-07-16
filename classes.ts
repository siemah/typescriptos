// like other languages like java, c# .. TS has a class based programming 
// look like other language and in ES6 the class syntaxe added too
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(d: number=0): void {
    let { name } = this;
    console.log(`${name} moved ${d}m`);
  }
} 
// inheritance 
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(d: number = 2): void {
    console.log("barking");
    super.move(d);
  }
}
class Snack extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(d: number=1): void {
    console.log("slithing ..");
    super.move(d);
  }
}
let sna = new Snack("Snake");
sna.move();
let dog = new Dog("jac");
dog.move(12);

// TS has 3 modifiers like others public, protected and private each of has own behavior
// public: is added by default and you can access this props or methods from inside class 
// or outside from instance and the same from derived too
// private: access only from inside class and can't reach it from instace or derived classes too 
// protected: is like private but it accessible from derived 
// in typescript we can mark a constructor protected 
class Cls {
  protected name: string;
  private _instance: Cls;

  constructor(name: string){
    this.name = name;
    this._instance = this;
  }
  public getName(): string {
    return this.name;
  }
  public init():Cls {
    return this._instance;
  }
}
class Child extends Cls {
  public setName(name: string): void {
    this.name = name;
  }
  setInit(){
    //return this._instance; // cant do this because _instance is private from superclass
  }
}
let cls = new Cls("siemah");
cls.getName();
//cls.name; // name prop is protected so cant reach from outside class shape
let child = new Child("bob");// first initialize a name to bob
// change the name from bob to lsidem using a new method define from child 
// class and access a protected prop of superclass Cls
child.setName("lsidem")
console.log(
  child.getName()
);

// Read only props
class ReadOnlyProp {
  readonly name: string; // we can initialized here or on constructor only
  constructor(name: string) {
    this.name = name;
  }
}
let read: ReadOnlyProp = new ReadOnlyProp("read only");  
console.log("read only props -> ", read.name);

// paramaetres propreties in TS we can declare a proprety in constructor in params passed to constructor
// like example below and params props allowed on constructor only and use a modifiers or readonly 
class ParamsProps {
  constructor(public name: string = "") {}
}
let pp: ParamsProps = new ParamsProps('sven bender');
console.log("params props -> ", pp.name);

// accessors setters/getters they are available on EC5 or higher
class Accessors {
  private _fname: string;

  get fullName (): string {
    return this._fname;
  }
  set fullName (fn: string) {
    this._fname = fn;
  }
}
let ac = new Accessors();
ac.fullName = 'marek hamsik';
console.log(ac.fullName);

// static props they reach by prepend the name of props with the name of main class
// not instanced name
interface Point {
  x: number;
  y: number;
}
class Distance {
  static origin: Point = {x: 0, y: 0};

  constructor(readonly scale: number) {}
  dist(coord: Point): number {
    let distX = coord.x - Distance.origin.x; 
    let distY = coord.y - Distance.origin.y;
    return Math.sqrt(distX*distX + distY*distY)/this.scale;
  }
}
let dist1 = new Distance(1.0);
let dist2 = new Distance(2.0);
console.log(`distance1 ${dist1.dist({ x: 1, y: 2 })}`);
console.log(`distance2 ${dist1.dist({ x: 10, y: 10 })}`);

// Abstract class look like interface maybe the same job but in abstract class unlike in interface 
// we can implement the details of methods except on abstract methods
abstract class Abs {
  constructor(public name: string) {}
  printName(): void{console.log(`departement of ${this.name}`);}
  abstract printMeet():void;
}
class AbsC extends Abs {
  constructor(n: string) {
    super(n);
  }
  printMeet(): void {
    console.log(`meeting of departement ${this.name} at 10pm`);
  }
}
let ad: Abs = new AbsC("TIC dep");
ad.printName()
ad.printMeet();

// use class li interface 
class Coords {
  x: number;
  y: number;
}
interface P3D extends Coords {
  z: number;
}
let xyz: P3D = { x: 1, y: 5, z: 45};


