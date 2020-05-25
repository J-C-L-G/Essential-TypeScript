"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    /**
     * The TypeScript compiler is able to infer the type of the price variable
     * based on the literal value that it is assigned when it is defined.
     * */
    function calculateTax(amount, tax = 1.2) {
        return Number((amount * tax).toFixed(2));
    }
    /* Type Annotations in variables*/
    const price = 200;
    const taxAmount = calculateTax(price);
    const halfShare = taxAmount / 2;
    console.log(`Full amount in tax: ${taxAmount}`);
    console.log(`Half share: ${halfShare}`);
};
