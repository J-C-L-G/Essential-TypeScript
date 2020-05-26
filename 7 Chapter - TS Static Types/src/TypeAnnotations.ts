export default () => {

    /*Using "Type Annotations"*/
    function calculateTax(amount: number, tax: number = 1.2): number {
        return amount * tax;
    }

    /* Type Annotations in variables*/
    const price: number = 100;
    const taxAmount: number = calculateTax(price);
    const halfShare: number = taxAmount / 2;
    console.log(`Full amount in tax: ${taxAmount}`);
    console.log(`Half share: ${halfShare}`);
};
