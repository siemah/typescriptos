// Enum types are usefull for some reasons like to prevent user choose other 
// choice not include in a set or define some constants where those have the same behavior
// to reach a value of enum like in this satatement-> enumName.propName
// the default value are of number type and they increment auto  
var Directions;
(function (Directions) {
    Directions[Directions["ONE"] = 1] = "ONE";
    Directions[Directions["TWO"] = 2] = "TWO";
    Directions[Directions["THREE"] = 3] = "THREE";
    Directions[Directions["SEVEN"] = 7] = "SEVEN";
})(Directions || (Directions = {}));
// use case of default Enum 
function getDirection(question, dir) {
    return "Answer of question " + question + " is: " + dir;
}
console.log(getDirection('How time algieria won the AFCON', Directions.TWO));
// String Enum
var strs;
(function (strs) {
    strs["dz"] = "Algeria";
    strs["sg"] = "Senegal";
    strs["ng"] = "Negeria";
})(strs || (strs = {}));
console.log(getDirection('Who won the last AFCON', strs.dz));
// hybrid Enum is mixin a number and string value Enum but it not recommanded
var Hybrid;
(function (Hybrid) {
    Hybrid[Hybrid["ON"] = 1] = "ON";
    Hybrid["OFF"] = "shutdown";
})(Hybrid || (Hybrid = {}));
var OEnum;
(function (OEnum) {
    OEnum[OEnum["x"] = 0] = "x";
    OEnum[OEnum["y"] = 1] = "y";
})(OEnum || (OEnum = {}));
function getObj(o) {
    return o.x;
}
getObj(OEnum);
console.log();
var a = OEnum.x;
console.log(OEnum[a]);
;
