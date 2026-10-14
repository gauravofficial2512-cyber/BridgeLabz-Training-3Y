let isDoorLocked = true;
let isWindowClose = true;
let isAlarmOn = true;
let isOwnerInside = true;
if(isDoorLocked && isAlarmOn && isOwnerInside && isWindowClose){
    console.log("secure");
}else{
    console.log("Unsafe");
}