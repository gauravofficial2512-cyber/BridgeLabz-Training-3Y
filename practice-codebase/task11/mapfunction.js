let arr = [1,2,3,4,5,6];
function mymap(arr,double){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(double(arr[i]));

    }
    return result;
}

function double(n){
    return n*2;
}

mymap(arr,double);