/*Using "Type Annotations"*/
function calculateTax(amount: number, tax: number = 1.2): number {
    return amount * tax;
}

console.log(calculateTax(100));