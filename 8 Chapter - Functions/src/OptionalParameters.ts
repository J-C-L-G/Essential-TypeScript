export default () => {
    /**
     * @param amount
     * @param discount - Optional parameters are defined by placing a question mark after the parameter name.
     */
    function calculateTax(amount, discount ?) {
        return (amount / 1.2) - (discount || 0);
    }

    let taxValue = calculateTax(100, 10);
    console.log(`2 args: ${taxValue}`);
    taxValue = calculateTax(100);
    console.log(`1 arg: ${taxValue}`);
};