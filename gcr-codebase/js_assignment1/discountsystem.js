let total = Number(prompt("Enter Total Amount"));
let discount = 0;
let final_price = 0;
if(total>=10000){
    discount = 25;
    final_price = Math.floor(total - (total * (discount/100)));

}else if(total>=5000){
    discount = 15;
    final_price = Math.floor(total - (total * (discount/100)));
}else if(total>=2000){
    discount = 5;
    final_price = Math.floor(total - (total * (discount/100)));
}else{
    discount = 0;
    final_price = Math.floor(total - (total * (discount/100)));
}
console.log("Original Total = ",total)
console.log("Discount Percentage = ",discount,"%")
console.log("final Price = ",final_price);