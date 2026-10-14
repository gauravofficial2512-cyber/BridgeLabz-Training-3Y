let arr = [];
let sum = 0;
let c1 = 0;
for(let i=0;i<8;i++){
    let num = Math.floor(Math.random()*71) + 30;
    arr[i] = num;
    sum  = sum + num;
    if(num>=50){
        c1++;
    }
}
console.log("Maximum Score = ",Math.max(...arr));
console.log("Minimum Score = ",Math.min(...arr));
console.log("Average score = ",sum/8);
console.log("Number of student Passed = ",c1);