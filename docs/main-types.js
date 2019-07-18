//Typescipt main Types
// boolean type in Typescript declaration and attribution too
var isDone = true;
// number type on TS like JS they are floating point
var decimal = 15; // decimal number
var hexa = 0xf05; // hexadecimal
var binar = 10; // binary number
var octal = 458; // octal number
// String type
var fname = 'Siemah';
var last = "Lsidem";
var full = "Hello! my whole name is " + fname + " " + last;
// Array type
var array = [1, 2, 3]; // 1st declaration of an array in TS
var list = ['siemah', fname]; // 2nd declaration of an array using Array<elemenType>
// Tupel type is an array with a fixed number of value the length od=f this array already knowen
var ages;
ages = ["sven", 25];
//ages = [25, 'sven'];//this fired an error because the tuple accept string then number in 2 index
// Enum type JS dons'nt has this type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var color = Color.Red; // print 0 because enum start from 0 or add the start {Red=1, ...}
var c = Color[1]; // print the value as string by passing the index to enum
console.log("color " + c);
//Any type
var ns = 19;
ns = {
    isExist: function () { return "Exist"; }
};
console.log(ns.isExist());
// or maybe use any type when we kbow a part of type like
var semiType = [1, 2, "string"];
console.log(semiType[2]);
// and there is other types like null, undefined they can assignable to null & undefined
// values and there is never type which can be assignable to function that throws 
// error or they not reach the end 
// The last type is object which can assigned to any type not primitive
var o = { prop: 1 };
o = [12];
console.log("object ", o);
// Type assertions is like type cast
var str = "str";
var len = str.length; //this used on TSX or (<string>str).length 
console.log("type assertions ", len);
