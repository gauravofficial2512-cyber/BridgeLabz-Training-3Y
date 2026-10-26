

function showMessage()
{
    greeting = "Welcome"; // act as a global variable
    console.log(greeting);
}
showMessage();

"use strict";
function showMessage()
{
    greeting = "Welcome"; // throw reference error 
    console.log(greeting);
}
showMessage();


function showMessage()
{
    let greeting = "Welcome"; // error fixed
    console.log(greeting);
}
showMessage();

