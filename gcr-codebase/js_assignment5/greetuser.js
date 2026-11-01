let n = "Gaurav"
function greet(name,callback){
    console.log(`hello ${name}`);
    callback()
}

function callback(){
    console.log("welcome to college");
}
greet(n,callback);