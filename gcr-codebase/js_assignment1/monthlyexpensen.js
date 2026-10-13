
let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;

let tax = total * 0.10;
total += tax;

console.log("Total Expenses before tax: ₹" + (total - tax).toFixed(2));
console.log("Average Monthly Expense: ₹" + (total - tax) / expenses.length);
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount after tax: ₹" + total.toFixed(2));
