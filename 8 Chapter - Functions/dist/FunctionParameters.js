"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    function calculateTax(amount, discount) {
        return (amount * 1.2) - discount;
    }
    let taxValue = calculateTax(100, 0);
    console.log(`2 args: ${taxValue}`);
    // taxValue = calculateTax(100);            // TS2554: Expected 2 arguments, but got 1
    // console.log(`1 arg: ${taxValue}`);
    // taxValue = calculateTax(100, 10, 20);    // TS2554: Expected 2 arguments, but got 3
    // console.log(`3 args: ${taxValue}`);
};
