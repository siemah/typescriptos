// Enum types are usefull for some reasons like to prevent user choose other 
// choice not include in a set or define some constants where those have the same behavior
// to reach a value of enum like in this satatement-> enumName.propName
// the default value are of number type and they increment auto  
enum Directions {
  ONE=1,
  TWO,
  THREE,
  SEVEN=7
}
// use case of default Enum 
function getDirection(question:string, dir:Directions|strs): string {
  return `Answer of question ${question} is: ${dir}`;
}
console.log(getDirection('How time algieria won the AFCON', Directions.TWO));

// String Enum
enum strs {
  dz="Algeria",
  sg="Senegal",
  ng="Negeria",
}
console.log(getDirection('Who won the last AFCON', strs.dz));

// hybrid Enum is mixin a number and string value Enum but it not recommanded
enum Hybrid {
  ON=1,
  OFF="shutdown",
}
// pass enum as an object like below example
interface O {
  x: number;
}
enum OEnum {
  x,
  y,
}
function getObj(o: O): number {
  return o.x;
}
getObj(OEnum)

// 
type LogLevelStrings = keyof typeof OEnum;
console.log();

let a = OEnum.x;
console.log(OEnum[a]);

// const enum to avoid extrat cost of code to be compiled
const enum NAme {
  x,
  y
};