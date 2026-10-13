let num1 = Math.floor(Math.random()*20) + 1;
let num2 = Math.floor(Math.random()*20) + 1;
let arr = ['+','-','*','/']
let opt = arr[Math.floor(Math.random()*4)];
let ans = 0;
switch(opt){
    case '+':console.log("addition of num1 and num2")
            ans = num1 + num2;
             console.log("answer = ",ans);
             break;
    case '-':console.log("Subtraction of num1 and num2")
             ans = num1 - num2;
             console.log("answer = ",ans);
             break;
    case '*':console.log("Multiplication of num1 and num2")
             ans = num1 * num2;
             console.log("answer = ",ans);
             break;
    case '/':console.log("Divison of num1 and num2")
             ans = num1 / num2;
             console.log("answer = ",ans.toFixed(2));
             break;
    
}
