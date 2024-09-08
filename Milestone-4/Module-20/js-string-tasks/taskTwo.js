/*
### Task-2: 
Count how many times a string has the letter `a` or `A`

---
*/

let str = 'there was a big Ass called africa';
let count_a = 0;
let countA = 0;
for(let i = 0 ; i<=str.length ; i++){
    if(str[i] === 'a'){
        count_a++
    }
    else if( str[i] === 'A'){
        countA++
    }
}
console.log(count_a);
console.log(countA); 