"use strict";
exports.__esModule = true;
// exports modules in TS 
// to export a module in TS it simple by adding the "export" before the statement 
// like function, vars, class, interface ..
exports.PORT = 1000;
exports.PO = exports.PORT;
// or just re-export from another module in externale file 
var mod1_1 = require("./libs/mod1"); // re-export module 
exports.User = mod1_1.User;
var mod2_1 = require("./libs/mod2"); // re-export module and rename
exports.Free = mod2_1.FreeAccount;
var acc;
var url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");
