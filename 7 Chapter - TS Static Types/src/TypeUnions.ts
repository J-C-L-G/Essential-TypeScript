export default () => {
    /**
     * TypeScript provides type unions, which specify a set of types.
     */
    function calculateTax(amount: number, format: boolean): string | number {
        const calcAmount = amount * 1.2;
        return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
    }

    /**
     * It is important to understand that a type union is handled as a type in its own right, whose features are
     * the intersection of the individual types. This means that the type of the "taxNumber" variable is
     * string | number and not number
     *
     * You can only use the properties and methods defined by all the types in the union, in this case only toString()
     * will be available.
     */
    const taxNumber = calculateTax(100, false);
    const taxString = calculateTax(100, true);

    // taxNumber.toFixed(2); //TS Error 3329: "toFixed" doesnt exist in type "string | number"
};