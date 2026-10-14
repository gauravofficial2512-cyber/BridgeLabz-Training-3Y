const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
]
let total = 0;
for(let i=0;i<cart.length;i++){
    total = total + cart[i].price;
    if(cart[i].category==='electronics'){
        cart[i].price = cart[i].price - 0.1 * cart[i].price;
    }else if(cart[i].category==='fashion'){
        cart[i].price = cart[i].price - 0.05 * cart[i].price;
    }
    total = total + cart[i].price;
}
if(total>50000){
    total = total - 0.05*total;
}
console.log("final price = ",total);
