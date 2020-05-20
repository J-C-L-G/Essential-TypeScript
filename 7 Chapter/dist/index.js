/*Using "Type Annotations"*/
function calculateTax(amount, tax = 1.2) {
    return amount * tax;
}
/* Type Annotations in variables*/
const price = 100;
const taxAmount = calculateTax(price);
const halfShare = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
