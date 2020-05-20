/*Using "Type Annotations"*/
function calculateTax(amount, tax = 1.2) {
    return amount * tax;
}
console.log(calculateTax(100));
