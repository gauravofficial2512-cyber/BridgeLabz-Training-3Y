const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
                null, undefined];

let valid = [];
let invalid = [];
for(let i=0;i<apiData.length;i++){
    let num = Number(apiData[i]);
    if(Number.isNaN(num)||apiData[i]===" "){
        invalid.push(apiData[i]);
    }else{
        valid.push(num);
    }
}

console.log("valid = ",valid);
console.log("invalid = ",invalid);



let numbers = [];
let booleans = [];
let strings = [];

for (let i = 0; i < apiData.length; i++) {
    numbers.push(Number(apiData[i]));
    booleans.push(Boolean(apiData[i]));
    strings.push(String(apiData[i]));
}

console.log("Numbers:", numbers);
console.log("Booleans:", booleans);
console.log("Strings:", strings);