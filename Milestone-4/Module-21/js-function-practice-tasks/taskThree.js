/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

---
*/

function make_avg(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length;
}
let x = [3, 23, 54, 1, 54, 65, 3];
console.log(make_avg(x));


//! practice 
//* count how many vowels a string has-------------------------------

function vowelMeter(str){
    let count = 0;
    str = str.toLowerCase();
    
    for(let i = 0; i<str.length ; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}

let total = 'hello there , my name is arijit basu';
console.log(vowelMeter(total));