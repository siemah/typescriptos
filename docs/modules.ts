// exports modules in TS 
// to export a module in TS it simple by adding the "export" before the statement 
// like function, vars, class, interface ..
export const PORT: number = 1000;
// or using a { name of the module to export }
export { PORT as PO };// 2nd type of export after declaring the const before this line & rename it
// or just re-export from another module in externale file 
export { User } from './libs/mod1';// re-export module 
export { FreeAccount as Free } from './libs/mod2';// re-export module and rename

// import module is simple as export by using import { modules, ..} from 'path/to/file.ts'
import { User } from './libs/mod1';
// import and rename 
import { FreeAccount as FAccount } from './libs/mod2'
// or import all modules inside a file in one big module contain all modules
import * as Mods from './libs/mod2';
let acc: Mods.FreeAccount; 
// ambient modules deifne a modulename.d.ts and decalare all 
// modules to import them like example below
import * as url from 'url';
let myUrl = url.parse("http://www.typescriptlang.org");

// structure a modules and avoid multiple level of nesting 
// 1/- if you're file contain a function/class/vars a good behavior to export it as default
//    to allow for consumers to user and rename the class/var .. how they want
// 2/- If you’re exporting multiple objects, put them all at top-level 
// 3/- use namespace import pattern if there is a large to export import * as M from 'path'
// 4/- 




