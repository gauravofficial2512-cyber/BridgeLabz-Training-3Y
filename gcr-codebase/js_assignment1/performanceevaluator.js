function evaluator(){
    let subject = [];
    for(let i=0;i<5;i++){
        subject[i] = Number(prompt("Enter Marks:"));
    }
    let sum = 0;
    for(let i = 0;i<5;i++){
        if(subject[i]<35){
            return "Detained";
        }
        sum = sum + subject[i];
        
    }
    let avg = sum/5;
    let percentage = ((sum)/500) * 100;

    if(percentage>=85){
        return "Promoted with Distinction"
    }else if(percentage>=50 && percentage<=84){
        return "Promoted"
    }else if(percentage<50){
        return "Detained"
    }
}
evaluator()