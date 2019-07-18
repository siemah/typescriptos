var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// using let and const rather than old var 
// give us to skip some weird behaviour like
for (var index = 0; index < 5; index++) {
    //setTimeout(() => console.log("index="+index), index * 10); // resultsis : 10 10 10 10 10 10 10 10
}
// to solve this behavior and to retrieve on each iteration the i
// used IIFE surround settimeout func or let
for (var index = 0; index < 5; index++) {
    //(index => setTimeout(() => console.log('inside IIFE index=', index), index * 100 + 100))(index);
}
// or just replace var by let from the first example
var o = { a: 25, b: 'bbbbb' };
var newA = o.a, newB = o.b;
console.log(newA, newB);
// define a function that accept an object who has 1/2
// props : a is a type number and b who is optional
function keepObj(obj) {
    // default value of object for b in our case(b=120)
    var a = obj.a, _a = obj.b, b = _a === void 0 ? 120 : _a;
    console.log(b);
}
keepObj({ a: 1, b: "150" });
var _o = { a: 15, m: function () { console.log("inside m"); } };
var _ob = __assign({ f: function () { return 15; } }, _o);
_ob.m();
