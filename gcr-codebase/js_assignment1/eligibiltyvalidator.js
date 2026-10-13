let age = Number(prompt("Enter Age"));
let isCitizen = prompt("enter isCitizen");
if(isCitizen==="yes" && age>=18){
    console.log("“Eligible for all services.”");
}else if(isCitizen==="yes" && age>=18&&age<=20){
    console.log("“Eligible to vote only.”");
}else if(age>=18){
    console.log("“Only age criteria met.”");
}else{
    console.log("“Not eligible yet.”");
}