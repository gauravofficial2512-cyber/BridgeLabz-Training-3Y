let arr = [4,5,6,3,1,8,9,5,0,-5,-6,0];
function myreduce(arr,max){
    return max(arr);
}
let m = arr[0];
 function max(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>m){
            m=arr[i];
        }
    }
    return m;
 }
 myreduce(arr,max);