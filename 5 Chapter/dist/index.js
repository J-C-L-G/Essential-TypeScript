"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
function printMessage(msg) {
    return `Log: ${msg.message}`;
}
console.log(printMessage({ message: "hey", num: 1 }));
console.log(calc_1.sum(1, 2, 3));
