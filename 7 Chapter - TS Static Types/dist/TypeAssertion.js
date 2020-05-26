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
    /**
     * A type assertion tells the TypeScript compiler to treat a value as a specific type, known as type narrowing,
     * this is one of the ways that you can narrow a type from a union.
     *
     * Caution: No type conversion is performed by a type assertion, which only tells the compiler what type it
     * should apply to a value for the purposes of type checking
     */
    const taxNumber = calculateTax(100, false);
    // Alternative Type Assertion Syntax (The problem with this syntax is that it cannot be used in TSX files)
    const taxString = calculateTax(100, true);
    console.log(`Number Value: ${taxNumber.toFixed(2)}`);
    console.log(`String Value: ${taxString.charAt(1)}`);
    /**
     * The compiler knows that boolean is not one of the types in the union "string | number"
     */
    // const taxBoolean = calculateTax(100, false) as boolean; // TS Error [2352]
    /**
     * You can force the assertion and override the compiler’s warning by first asserting
     * to any and then to the type you require, however, as noted earlier, assertions only
     * affect the type checking process and do not perform type coercion
     */
    const taxBoolean = calculateTax(100, false);
    console.log(`Boolean Value: ${taxBoolean} Type: ${typeof taxBoolean}`); // <- Type: number
};
