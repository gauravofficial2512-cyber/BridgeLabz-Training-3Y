
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    discount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    details() {
        return `${this.name} - Rs.${this.price} - ${this.category}`;
    }
}

let p1 = new Product(1, "Laptop", 50000, "Electronics");
let p2 = new Product(2, "Mouse", 800, "Electronics");
let p3 = new Product(3, "Watch", 2000, "Accessories");

let arr = [p1, p2, p3];

p1.discount();

console.log("Product Details:");
arr.forEach(p => console.log(p.details()));

let res = arr.filter(p => p.price > 1000);

console.log("Products above 1000:");
console.log(res);
