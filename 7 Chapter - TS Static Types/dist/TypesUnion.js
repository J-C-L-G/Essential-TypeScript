"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    /**
     * TypeScript provides type unions, which specify a set of types.
     */
    function calculateTax(amount, format) {
        const calcAmount = amount * 1.2;
        return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
    }
    const taxNumber = calculateTax(100, false);
    const taxString = calculateTax(100, true);
};
