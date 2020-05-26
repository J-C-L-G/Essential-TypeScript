export default () => {
    /**
     * TypeScript provides the never type to ensure you can’t accidentally use a
     * value once type guards have been used to exhaustively narrow a value to all
     * of its possible types.
     */
    function calculateTax(amount: number, format: boolean): string | number {
        const calcAmount = amount * 1.2;
        return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
    }

    function logger(value: string | number): string {
        switch (typeof value) {
            case "string": {
                return `String Value: ${value.charAt(1)}`;
            }
            case "number":{
                return `Number Value: ${value.toFixed(2)}`;
            }
            default: {
                const temp: never = value; // Narrowed to "never"
                console.log(`Unexpected type for value: ${temp}`);
            }
        }
    }

    const taxNumber = calculateTax(100, false);
    console.log(logger(taxNumber));
    const taxString = calculateTax(100, true);
    console.log(logger(taxString));
};