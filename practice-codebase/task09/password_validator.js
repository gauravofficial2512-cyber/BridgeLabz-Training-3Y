let password = prompt("enter Password");

let c1 = false;
let c2 = false;
let c3 = false;
let c4 = false;
function password_validator(password){
    let s = password.trim()
    if(s.length<=6){
        console.log("Invalid Password");
        return;
    }
    for(let i=0;i<s.length;i++){
        let a = s.charAt(i);
        if(a>='a' && a<='z'){
            c1 = true;
        }else if(a>='0' && a <= '9'){
            c2 = true;
        }else if(a>='A' && a <= 'Z'){
            c3 = true;
        }else{
            c4 = true;
        }
    }
    if(c1 && c2 && c3 && c4){
        console.log("Valid Password");
    }else{
        console.log("Invalid Password");
    }
}
password_validator(password)