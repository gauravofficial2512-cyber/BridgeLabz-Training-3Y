let n = Number(prompt("enter value"));
let pyramidgenerator = function(n){
    for(let i=1;i<=n;i++){
        let s="";
        for(let j=1;j<=i;j++){
            s=s+"* "
        }
        console.log(s);
    }
}
pyramidgenerator(n);