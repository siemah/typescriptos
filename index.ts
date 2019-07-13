//Typescipt main Types

// boolean type in Typescript declaration and attribution too
let isDone: boolean = true;
// number type on TS like JS they are floating point
let decimal: number = 15;// decimal number
let hexa: number = 0xf05;// hexadecimal
let binar: number = 0b1010// binary number
let octal: number = 0o712// octal number
// String type
let fname: string = 'Siemah';
let last: string = "Lsidem";
let full: string = `Hello! my whole name is ${fname} ${last}`;
// Array type
let array: number[] = [1, 2, 3];// 1st declaration of an array in TS
let list: Array<string> = ['siemah', fname];// 2nd declaration of an array using Array<elemenType>
// Tupel type is an array with a fixed number of value the length od=f this array already knowen
let ages: [string, number];
ages = ["sven", 25];
//ages = [25, 'sven'];//this fired an error because the tuple accept string then number in 2 index
// Enum type JS dons'nt has this type
enum Color { Red, Green, Yellow};
let color: Color = Color.Red// print 0 because enum start from 0 or add the start {Red=1, ...}
let c: string = Color[1];// print the value as string by passing the index to enum
console.log("color "  + c);
//Any type
let ns: any = 19;
ns = {
	isExist: () => "Exist",
};
console.log(ns.isExist());
// or maybe use any type when we kbow a part of type like
let semiType: Array<any> = [1, 2, "string"];
console.log(semiType[2]);
// and there is other types like null, undefined they can assignable to null & undefined
// values and there is never type which can be assignable to function that throws 
// error or they not reach the end 
// The last type is object which can assigned to any type not primitive
let o: object = {prop: 1}
o = [12];
console.log("object ", o)
// Type assertions is like type cast
let str: string = "str";
let len: number = (str as string).length;//this used on TSX or (<string>str).length 
console.log("type assertions ", len);
