"use strict"


const employees = 
[
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
]

let result = employees.map(x => {
    x.salary = Number(x.salary);
    x.years = Number(x.years);
    return x;
})

for(let i=0;i<result.length;i++){
    if(result[i].years>3){
        result[i].bonus = result[i].salary * 0.1;
    }else{
        result[i].bonus = result[i].salary * 0.05
    }
}


for(let i=0;i<result.length;i++){
    console.log(`name : ${result[i].name},salary : ${result[i].salary},years : ${result[i].years}, bonus : ${result[i].bonus} `);
}
