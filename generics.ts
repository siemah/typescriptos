// Generics type is look like pass some arguments to a function and return the same type as argument
// those functions cammed identity function and rather than pass any type to function with generics
// we can detirmine a type depend on user what want and that make the function reusable like Component
function identity<T>(arg:T): T {
  return arg;
} 
// we can call thos genirics function (in case above identity func) 1 of 2 ways
let fun1 = identity<string>('siemah');// determine the type between angle brackets
let fun2 = identity("lsidem");// let the compiler to determine the type

// but when working with generics type care about the type because some time we don't get what expected 
// like example below want to get the length of string or array but the compiler display to us an error
// because maybe the generic type maybe is a number or other who donsnt have a .length prop
function logMeLength<T>(arg:T):T {
  //console.log(arg.length);// maybe we passed a number, boolean or ... and those types dont have .length
  return arg;
}
// if we attend to use like this way maybe change the defenition of function. in this example we passed 
// an array of generic type so array has .length prop
function logMeLength2<T>(arg:T[]):T[] {
  console.log(arg.length);
  return arg;
}
// the second definition like java and C#
function loMeLength3<T>(arg:Array<T>): Array<T>{
  return arg;
}

// And we can improve the generic definition and use interface 
function identity2<T>(arg: T): T {
  return arg;
} 
const iden: <T>(arg: T)=>T = identity2;// that work fine and we can rename T to U or other type in declaration
// we can also use object signature too
const iden2: { <T>(arg: T): T} = identity;
// and from the last example we can extract the definition to use interface
interface GenericIdentity {
  <T>(arg: T): T;
}
const ident3: GenericIdentity = identity
// so on, we can move the generic parameter  to be a generic parameter of whole interface
interface GenericIdentity2<T> {
  (arg: T): T;
}
const ident4: GenericIdentity2<string> = identity;

// generic classes like interface class either can accept generic paramatre
class GenericCls<T> {
  myProp: T;
  add: (x: T, y: T) => T;
}
let gen = new GenericCls<number>();
gen.myProp = 150;
gen.add = function(x: number, y: number){return x+y};
console.log(gen.add(5, 6));
let strGen = new GenericCls<string>();
strGen.myProp = "siemah";
strGen.add = function (x, y) { return x + y };
console.log(strGen.add("4", "sssss"));

// generic consraints we have seen earlier we cant reach a membre .length of generic type T see line 14
interface Constraint {
  length: number;
}
function identityConstraint<T extends Constraint>(x: T): T {
  console.log(x.length);
  return x;
}
//identityConstraint(3);// in this case we accept just a type whose has a .length as props
identityConstraint({length: 1, value: 19});

// Using Type Parameters in Generic Constraints
function getProp<T, K extends keyof T>(o:T, k: K) {
  return o[k];
}
console.log(
  getProp({ a: 1, b: 2 }, "a"),
);











