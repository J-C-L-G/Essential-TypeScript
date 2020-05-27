export default () => {
    /**
     * If there is a fallback value that should be used for an optional parameter,
     * then it can be applied when the parameter is defined
     */
    function calculateTax(amount, discount = 0) {
        return (amount * 1.2) - discount;
    }

    let taxValue = calculateTax(100, 0);
    console.log(`2 args: ${taxValue}`);
    taxValue = calculateTax(100);
    console.log(`1 arg: ${taxValue}`);
};