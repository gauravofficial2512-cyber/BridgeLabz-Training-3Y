let temp = Number(prompt("Enter Temperature"));
let israining = (prompt("Is Raining"));
let windspeed = Number(prompt("enter Wind Speed"));

if(israining==="yes"){
    console.log("“Stay indoors with hot coffee.”");
}else if(temp>35){
    console.log("“Go swimming.”");
}else if(temp <15 && windspeed>20){
    console.log("“Too cold and windy — stay home.”");
}else{
    console.log("“Perfect day for a walk.”")
}