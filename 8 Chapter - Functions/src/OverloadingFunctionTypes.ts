export default () => {
    /**
     * This is NOT the function overloading supported by languages such as C# and Java.
     * Only the type information is overloaded by this feature for the purposes of type checking.
     * There is only one implementation of the function, which is still responsible for dealing
     * with all the types used in the overloads.
     */
    function calculateTax(amount: null): null;
    function calculateTax(amount: number): number;
    function calculateTax(amount: number | null) : number | null {
        if (amount !== null){
            return amount * 1.2
        } else {
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