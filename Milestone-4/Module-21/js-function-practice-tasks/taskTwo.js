/*
### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

---
*/

function number(x){
    if(x % 2 !== 0){
        return x*2;
    }
    else{
        return x /2;
    }
}
console.log(number(5));