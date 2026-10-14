let arr = [];
let c1 = 1;
for(let i=0;i<30;i++){
    arr[i] = c1;
    c1++;
}
for(let i=0;i<30;i++){
    if(arr[i]%2===0){
        console.log("Even");
    }else if(arr[i]%3===0 && arr[i]%5===0){
        console.log("FizzBuzz");
    }else{
        console.log("Odd");
    }
}