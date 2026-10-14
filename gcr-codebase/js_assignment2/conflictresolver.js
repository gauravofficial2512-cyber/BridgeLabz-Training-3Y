let bonus = 5000;
function calculateSalary(){
    let salary = 40000;
    let ispermanent = true;
    if(ispermanent===true){
        salary = salary + bonus;
    }
    console.log("Total Salary = ",salary);
}
calculateSalary();
console.log("Global bonus = ",bonus);