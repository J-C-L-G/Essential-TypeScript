"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    /**
     * In TypeScript an unknown value can’t be assigned to another type without a type assertion.
     */
    function calculateTax(amount, format) {
        const calcAmount = amount * 1.2;
        return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
    }
    const newResult = calculateTax(200, false);
    // const myNumber: number = newResult; // <- error TS2322: Type 'unknown' is not assignable to type 'number'.
    const myNumber = newResult;
    console.log(`Number value: ${myNumber.toFixed(2)}`);
};
