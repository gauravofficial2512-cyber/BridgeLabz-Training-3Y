let time = new  Date().getHours();
let name = "Gaurav Prajapati";
if(time<12){
    console.log("Good Morning",name);
}else if(time>=12 && time<=17){
    console.log("Good Afternoon",name);
}else{
    console.log("Good Evening",name);
}