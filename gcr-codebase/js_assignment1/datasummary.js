let username = "Gaurav";
let age = 21;
let isStudent = true;
let skills = ["html","css","java-script"];
let address = null;
let extrainfo;

let data = [
    {
        label:"Username",
        value:username,
        type:typeof username
    
    },
    {
        label : "age",
        value : age,
        type  : typeof age
    },
    {
        label : "Is Student",
        value : isStudent,
        type : typeof isStudent
    },
    {
        label : "Skills",
        value : JSON.stringify(skills),
        type : Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "Address",
        value: address,
        type: address === null ? "null" : typeof address
    },
    {
        label: "Extra Info",
        value: extrainfo,
        type: typeof extrainfo
    }
];
console.table(data);