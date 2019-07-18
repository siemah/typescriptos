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

let o = {a: 25, b: 'bbbbb'};
let {a: newA, b: newB}: {a:number, b:string} = o;
console.log(newA, newB);
// define a function that accept an object who has 1/2
// props : a is a type number and b who is optional
function keepObj(obj:{a: number, b?: string}) {
  // default value of object for b in our case(b=120)
  let {a, b=120} = obj;
  console.log(b);
}
keepObj({a: 1, b: "150"});


let _o: any = {a: 15, m() {console.log("inside m");}};

let _ob = {f(){return 15}, ..._o};
_ob.m();