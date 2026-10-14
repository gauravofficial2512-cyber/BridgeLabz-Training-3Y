let product = " wireless headphones PRO ";
let s = product.trim();
let arr = s.split(" ");
let ans = ""
for(let i=0;i<arr.length;i++){
    let char = arr[i].charAt(0);
    let newchar = char.toUpperCase();
    let newstr = arr[i].replace(char ,newchar);
    ans = ans + newstr + " ";
}
let newstr = ans.replace("PRO","Pro Edition");
console.log(newstr);
