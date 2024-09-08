/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

---
*/
function count_zero(str){
    let count = 0;
    for(let i = 0 ; i<str.length ; i++){
        if(str[i]=== '0'){
            count++;
        }
    }
    return count;
}

let x = '101000101101110';
console.log(count_zero(x));