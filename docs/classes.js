var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// like other languages like java, c# .. TS has a class based programming 
// look like other language and in ES6 the class syntaxe added too
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (d) {
        if (d === void 0) { d = 0; }
        var name = this.name;
        console.log(name + " moved " + d + "m");
    };
    return Animal;
}());
// inheritance 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (d) {
        if (d === void 0) { d = 2; }
        console.log("barking");
        _super.prototype.move.call(this, d);
    };
    return Dog;
}(Animal));
var Snack = /** @class */ (function (_super) {
    __extends(Snack, _super);
    function Snack(name) {
        return _super.call(this, name) || this;
    }
    Snack.prototype.move = function (d) {
        if (d === void 0) { d = 1; }
        console.log("slithing ..");
        _super.prototype.move.call(this, d);
    };
    return Snack;
}(Animal));
var sna = new Snack("Snake");
sna.move();
var dog = new Dog("jac");
dog.move(12);
// TS has 3 modifiers like others public, protected and private each of has own behavior
// public: is added by default and you can access this props or methods from inside class 
// or outside from instance and the same from derived too
// private: access only from inside class and can't reach it from instace or derived classes too 
// protected: is like private but it accessible from derived 
// in typescript we can mark a constructor protected 
var Cls = /** @class */ (function () {
    function Cls(name) {
        this.name = name;
        this._instance = this;
    }
    Cls.prototype.getName = function () {
        return this.name;
    };
    Cls.prototype.init = function () {
        return this._instance;
    };
    return Cls;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.setName = function (name) {
        this.name = name;
    };
    Child.prototype.setInit = function () {
        //return this._instance; // cant do this because _instance is private from superclass
    };
    return Child;
}(Cls));
var cls = new Cls("siemah");
cls.getName();
//cls.name; // name prop is protected so cant reach from outside class shape
var child = new Child("bob"); // first initialize a name to bob
// change the name from bob to lsidem using a new method define from child 
// class and access a protected prop of superclass Cls
child.setName("lsidem");
console.log(child.getName());
// Read only props
var ReadOnlyProp = /** @class */ (function () {
    function ReadOnlyProp(name) {
        this.name = name;
    }
    return ReadOnlyProp;
}());
var read = new ReadOnlyProp("read only");
console.log("read only props -> ", read.name);
// paramaetres propreties in TS we can declare a proprety in constructor in params passed to constructor
// like example below and params props allowed on constructor only and use a modifiers or readonly 
var ParamsProps = /** @class */ (function () {
    function ParamsProps(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    return ParamsProps;
}());
var pp = new ParamsProps('sven bender');
console.log("params props -> ", pp.name);
// accessors setters/getters they are available on EC5 or higher
var Accessors = /** @class */ (function () {
    function Accessors() {
    }
    Object.defineProperty(Accessors.prototype, "fullName", {
        get: function () {
            return this._fname;
        },
        set: function (fn) {
            this._fname = fn;
        },
        enumerable: true,
        configurable: true
    });
    return Accessors;
}());
var ac = new Accessors();
ac.fullName = 'marek hamsik';
console.log(ac.fullName);
var Distance = /** @class */ (function () {
    function Distance(scale) {
        this.scale = scale;
    }
    Distance.prototype.dist = function (coord) {
        var distX = coord.x - Distance.origin.x;
        var distY = coord.y - Distance.origin.y;
        return Math.sqrt(distX * distX + distY * distY) / this.scale;
    };
    Distance.origin = { x: 0, y: 0 };
    return Distance;
}());
var dist1 = new Distance(1.0);
var dist2 = new Distance(2.0);
console.log("distance1 " + dist1.dist({ x: 1, y: 2 }));
console.log("distance2 " + dist1.dist({ x: 10, y: 10 }));
// Abstract class look like interface maybe the same job but in abstract class unlike in interface 
// we can implement the details of methods except on abstract methods
var Abs = /** @class */ (function () {
    function Abs(name) {
        this.name = name;
    }
    Abs.prototype.printName = function () { console.log("departement of " + this.name); };
    return Abs;
}());
var AbsC = /** @class */ (function (_super) {
    __extends(AbsC, _super);
    function AbsC(n) {
        return _super.call(this, n) || this;
    }
    AbsC.prototype.printMeet = function () {
        console.log("meeting of departement " + this.name + " at 10pm");
    };
    return AbsC;
}(Abs));
var ad = new AbsC("TIC dep");
ad.printName();
ad.printMeet();
// use class li interface 
var Coords = /** @class */ (function () {
    function Coords() {
    }
    return Coords;
}());
var xyz = { x: 1, y: 5, z: 45 };
