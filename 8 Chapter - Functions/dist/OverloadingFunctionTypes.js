"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    function calculateTax(amount) {
        if (amount !== null) {
            return amount * 1.2;
        }
        else {
            return null;
        }
    }
    /**
     * Each type overload defines a combination of types supported by the function,
     * describing a mapping between the parameters and the result they produce.
     *
     * The type overloads replace the function definition as the type information used by the TypeScript
     * compiler, which means that only those combinations of types can be used. When the function is invoked,
     * the compiler is able to determine the result type based on the type of the arguments provided, allowing the
     * taxAmount variable to be defined as a number or null without a type guard.
     */
    const taxAmount = calculateTax(100);
    console.log(`taxAmount = ${taxAmount.toFixed(2)}`);
    const taxAmount2 = calculateTax(null);
    console.log(`taxAmount = ${taxAmount2}`);
};
