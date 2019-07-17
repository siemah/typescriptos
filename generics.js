// Generics type is look like pass some arguments to a function and return the same type as argument
// those functions cammed identity function and rather than pass any type to function with generics
// we can detirmine a type depend on user what want and that make the function reusable like Component
function identity(arg) {
    return arg;
}
// we can call thos genirics function (in case above identity func) 1 of 2 ways
var fun1 = identity('siemah'); // determine the type between angle brackets
var fun2 = identity("lsidem"); // let the compiler to determine the type
// but when working with generics type care about the type because some time we don't get what expected 
// like example below want to get the length of string or array but the compiler display to us an error
// because maybe the generic type maybe is a number or other who donsnt have a .length prop
function logMeLength(arg) {
    //console.log(arg.length);// maybe we passed a number, boolean or ... and those types dont have .length
    return arg;
}
// if we attend to use like this way maybe change the defenition of function. in this example we passed 
// an array of generic type so array has .length prop
function logMeLength2(arg) {
    console.log(arg.length);
    return arg;
}
// the second definition like java and C#
function loMeLength3(arg) {
    return arg;
}
// And we can improve the generic definition and use interface 
function identity2(arg) {
    return arg;
}
var iden = identity2; // that work fine and we can rename T to U or other type in declaration
// we can also use object signature too
var iden2 = identity;
var ident3 = identity;
var ident4 = identity;
// generic classes like interface class either can accept generic paramatre
var GenericCls = /** @class */ (function () {
    function GenericCls() {
    }
    return GenericCls;
}());
var gen = new GenericCls();
gen.myProp = 150;
gen.add = function (x, y) { return x + y; };
console.log(gen.add(5, 6));
var strGen = new GenericCls();
strGen.myProp = "siemah";
strGen.add = function (x, y) { return x + y; };
console.log(strGen.add("4", "sssss"));
function identityConstraint(x) {
    console.log(x.length);
    return x;
}
//identityConstraint(3);// in this case we accept just a type whose has a .length as props
identityConstraint({ length: 1, value: 19 });
// Using Type Parameters in Generic Constraints
function getProp(o, k) {
    return o[k];
}
console.log(getProp({ a: 1, b: 2 }, "a"), getProp({ a: 1, b: 2 }, "b"));
