let num = Math.floor(Math.random() * 50) + 1;
let guess = Number(prompt("enter Guess"));
while(true){
    if(guess===num){
        console.log("Correct Guess");
        break;
    }else if(guess===num+3 || guess===num-3){
        console.log("Very Close");
        guess = Number(prompt("Very Close Try Again"))
    }else if(guess>num){
        console.log("Too High Try Again")
        guess = Number(prompt("Too High Try Again"))
    }else{
        console.log("Too Low Try Again");
        guess = Number(prompt("Too Low Try Again"))
    }
}