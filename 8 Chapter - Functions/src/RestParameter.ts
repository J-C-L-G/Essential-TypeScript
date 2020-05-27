export default () => {
    /**
     * @param extraFees - The rest parameter allows a function to accept a variable
     * number of arguments, which are grouped together and presented together.
     * A function can have one rest parameter only, and it must be the last parameter
     */
    function calculateTax(amount, discount = 0, ...extraFees) {
        return (amount * 1.2) - discount + extraFees.reduce((total, fee) => total + fee, 0);
    }

    let taxValue = calculateTax(100, 0);
    console.log(`2 args: ${taxValue}`);

    taxValue = calculateTax(100);
    console.log(`1 arg: ${taxValue}`);

    taxValue = calculateTax(100, 10, 20);
    console.log(`3 arg: ${taxValue}`);

    taxValue = calculateTax(100, 20, 1, 2, 3, 4, 5 );
    console.log(`7 arg: ${taxValue}`);
};