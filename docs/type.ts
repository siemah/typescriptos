// in TS structural type system was designed on how JS code is typically written  
// like this example below who describe this behavior 
interface Inter {
  name: string;
}
class Person {
  name: string;
}
let p: Inter;
p = new Person();
console.log(p);

// type compatibility in TS
let x: Inter;
let y = { name: "siemah", age: 26};
// here we have 2 type deffirent in the name but in TS the type compatibility was deffirente
// and we assigne 'y' to 'x' because 'y' has at least the same elements(shape) like x' 
x = y;
// and in 2nd case we prove it
function comp(o:Inter) {
  return o.name;
}
comp(y);

// comparing functions 
let _x = (a: number, z: number) => 0;
let _y = (a:number) => 0;

// this case we can assign 'y' to x' because 'y' has the same shape as 'x' plus extrat param 
_x = _y;
// here 'y' type need to have 2 params and 'x' has just one param unlike 1st case,which look like Array.foreach, 
//_y = _x;
// the same type checking for the return value

// Enum compatibility: in case of enums they are not compatible if they come from different enum
enum E1 {red, green,blue};
enum E2 {on, off}
let _a = E1.green;
_a =  E2.on;

//Class: concern classes they like interfcas and literal object with just on deffirence they 
// just compare instance no class part
class Animal {
  private feed: string;
  constructor(name: string, age: number) {
    // bbbb
  }
}
class Dog {
  private feed: string;
}
let dog: Dog;
let ani: Animal;
dog = ani;
ani = dog;









