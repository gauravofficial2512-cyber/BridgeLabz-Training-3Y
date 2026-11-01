let arr = [1,2,3,4,5];
function applyoperation(arr,callback){
    callback(arr);
    return arr;
}
 function double(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = 2*arr[i];
    }
}

function saquare(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]*arr[i];
    }
}
applyoperation(arr,saquare);