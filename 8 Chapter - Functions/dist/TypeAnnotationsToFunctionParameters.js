"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    /**
     * By default, the TypeScript compiler assigns all function parameters to the any type,
     * but more specific types can be declared using type annotations.
     */
    function calculateTax(amount, discount = 0, ...extraFees) {
        return (amount * 1.2) - discount + extraFees.reduce((total, fee) => total + fee, 0);
    }
    let taxValue = calculateTax(100, 0);
    console.log(`2 args: ${taxValue}`);
    taxValue = calculateTax(100);
    console.log(`1 arg: ${taxValue}`);
    taxValue = calculateTax(100, 10, 20);
    console.log(`3 arg: ${taxValue}`);
    taxValue = calculateTax(100, 20, 1, 2, 3, 4, 5);
    console.log(`7 arg: ${taxValue}`);
};
