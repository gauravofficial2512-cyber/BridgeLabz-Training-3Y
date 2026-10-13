let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let s = "#";
for(let i=0;i<6;i++){
    let num = Math.floor(Math.random()*16)
    s = s + arr[num];
}
console.log("generated colour = ",s)