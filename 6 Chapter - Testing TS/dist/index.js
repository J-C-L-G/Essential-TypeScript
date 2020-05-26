"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
const vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`${vals.toString().split(",").join(" + ")} = ${calc_1.sum(...vals)}`);
