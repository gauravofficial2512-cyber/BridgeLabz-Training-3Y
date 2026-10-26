const transactions =[
                        { id: 1, amount: 2000 },
                        { id: 2, amount: -500 },
                        { id: 3 },
                        null
                    ];

let valid = [];
let invalid = [];
let c1 = 0;
let c2 = 0;
for(let i=0;i<transactions.length;i++){
    
    try{
        if(transactions[i]==null){
            throw new Error("Missing entry");
        }
        let a = transactions[i].id;
        let b = transactions[i].amount;
        if(b<0){
            throw new Error("Negative amount");
        }else if(a==undefined){
            throw new Error("Missing id");
        }else if(b==undefined){
            throw new Error("Missing amount");
        }
        valid.push(transactions[i]);
        c1++;
    }catch(error){
        c2++;
        let obj = {
            Trasncation : transactions[i],
            reason : error.message

        }
        invalid.push(obj)
        console.log(`Transaction ${i+1}:${error.message}`);
    }
}


console.log(valid);
console.log(invalid);
console.log("number of valid transaction = ",c1);
console.log("number of invalid transaction = ",c2);