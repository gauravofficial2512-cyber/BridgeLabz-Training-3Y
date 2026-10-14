let feedback = "Great product! Fast delivery and amazing sound quality";
let arr = feedback.split(" ");
let c1 = 0;
console.log("total number of words = ",arr.length);
for(let i=0;i<arr.length;i++){
    if(arr[i]==="poor"||arr[i]==="bad"){
        c1++;
    }
}
if(c1>0){
    console.log("Need Improvement");
}else{
    console.log("Positive Feedback");
}