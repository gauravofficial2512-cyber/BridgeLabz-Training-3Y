
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

let e1 = new Employee(1, "Aman", "IT", 30000);
let e2 = new Employee(2, "Ravi", "HR", 25000);
let e3 = new Employee(3, "Neha", "IT", 40000);
let e4 = new Employee(4, "Rohit", "Sales", 35000);
let e5 = new Employee(5, "Priya", "HR", 28000);

let arr = [e1, e2, e3, e4, e5];

e1.applyBonus(10);

arr.forEach(e => {
    console.log(e.name, e.getAnnualSalary());
});

let total = arr.reduce((sum, e) => {
    return sum + e.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", total);
