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
;
;
function makeSquare(config) {
    var square = { area: 100, color: 'white' };
    if (config.color)
        square.color = config.color;
    if (config.width)
        square.area = config.width * config.width;
    return square;
}
;
var p1 = { x: 15, y: 2 };
//p1.x = 15;// this failed to compile because p1.x is readonly can't upcate
// readonly for arrays 
var arr = [1, 2, 3, 4];
var a;
// use the search function type to define a shape of function and the parms can renamed to defferent names
var searchFunction = function (str, substring) { return str.search(substring) > -1; };
console.log(searchFunction("string", 'sstr'));
;
var indexTypes;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var strArrRea = ['1222', "sss",];
var DZTime = /** @class */ (function () {
    function DZTime(h, m) {
        this.currentTime = new Date();
    }
    DZTime.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return DZTime;
}());
var Clock = /** @class */ (function () {
    function clockMe(h, m) {
    }
    clockMe.prototype.tick = function () {
        console.log("tick tock");
    };
    return clockMe;
}());
var square = {}; // must initialize the value
square.color = 'blue';
square.length = 21;
square.surface = 21 * 21;
function getCounter() {
    var counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () { console.log("reset"); };
    return counter;
}
var Counter = getCounter();
Counter(10);
Counter.reset();
Counter.interval = 5.9;
console.log("Counter", Counter.interval);
// interface extends class 
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log("button select");
    };
    return Button;
}(Control));
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.select = function () {
        console.log("textarea select");
    };
    return TextArea;
}(Control));
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.select = function () {
        console.log("input select ");
    };
    return Input;
}());
