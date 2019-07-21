var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
console.log(p);
// type compatibility in TS
var x;
var y = { name: "siemah", age: 26 };
// here we have 2 type deffirent in the name but in TS the type compatibility was deffirente
// and we assigne 'y' to 'x' because 'y' has at least the same elements(shape) like x' 
x = y;
// and in 2nd case we prove it
function comp(o) {
    return o.name;
}
comp(y);
// comparing functions 
var _x = function (a, z) { return 0; };
var _y = function (a) { return 0; };
// this case we can assign 'y' to x' because 'y' has the same shape as 'x' plus extrat param 
_x = _y;
// here 'y' type need to have 2 params and 'x' has just one param unlike 1st case,which look like Array.foreach, 
//_y = _x;
// the same type checking for the return value
// Enum compatibility: in case of enums they are not compatible if they come from different enum
var E1;
(function (E1) {
    E1[E1["red"] = 0] = "red";
    E1[E1["green"] = 1] = "green";
    E1[E1["blue"] = 2] = "blue";
})(E1 || (E1 = {}));
;
var E2;
(function (E2) {
    E2[E2["on"] = 0] = "on";
    E2[E2["off"] = 1] = "off";
})(E2 || (E2 = {}));
var _a = E1.green;
_a = E2.on;
//Class: concern classes they like interfcas and literal object with just on deffirence they 
// just compare instance no class part
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        // bbbb
    }
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var dog;
var ani;
dog = ani;
ani = dog;
