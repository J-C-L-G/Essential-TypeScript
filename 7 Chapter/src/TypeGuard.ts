export default () => {
    /**
     * TypeScript provides type unions, which specify a set of types.
     */
    function calculateTax(amount: number, format: boolean): string | number {
        const calcAmount = amount * 1.2;
        return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
    }

    function logger(value: string | number): string {
        if( typeof value === "string"){
            return `String Value: ${value.charAt(1)}`;
        } else {
            return `Number Value: ${value.toFixed(2)}`;
        }
    }

    const taxNumber = calculateTax(100, false);
    console.log(logger(taxNumber));
    const taxString = calculateTax(100, true);
    console.log(logger(taxString));
};