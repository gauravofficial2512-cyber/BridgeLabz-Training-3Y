let arr = ["apple","banana","litchi","pears","gauva","mango","peach"]
function myfilter(arr,filt){
    let result = []
    for(let i=0;i<arr.length;i++){
        if(filt(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;

}
function filt(x){
    if(x.length===5){
        return x;
    }
}
myfilter(arr,filt);