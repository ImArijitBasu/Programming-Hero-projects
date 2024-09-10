function waitingTime(waitingTimes, serialNumber) {
    if (!serialNumber > waitingTimes.length) {
        return "Invalid Input"
    }
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let totalTime = 0;
    for (let wait of waitingTimes) {
        totalTime = totalTime + wait;
    }
    let averageTime = totalTime / waitingTimes.length;
    averageTime = Math.round(averageTime);
    let isratSerial = (serialNumber - 1) - waitingTimes.length
    let isratWaitingTime = isratSerial * averageTime;
    return isratWaitingTime;
}




//! testing 
const arr = [3, 5, 7, 11, 6];
const arr2 = [13 , 2];
const arr3 = [13 , 2 , 6 , 7 , 10];
const arr4 = [6];
const arr5 = 7;
const arr6 = "[6,2]";
const arr7 = [7 , 8 , 3 , 4 , 5];

console.log(waitingTime(arr, 10));
console.log(waitingTime(arr2, 6));
console.log(waitingTime(arr3, 6));
console.log(waitingTime(arr4, 4));
console.log(waitingTime(arr5, 10));
console.log(waitingTime(arr6, 6));
console.log(waitingTime(arr7, "9"));
