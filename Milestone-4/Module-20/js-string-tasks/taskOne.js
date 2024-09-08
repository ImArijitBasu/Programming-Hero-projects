/*
### Task-1: 
Count how many times a string has the letter `a`
*/

let str = 'there was a big ass called africa';
let count = 0;
// console.log(str.length);
// console.log(str.split(' '));
// console.log(str[2]);

for(let i = 0; i<str.length; i++){
    if(str[i]=== 'a'){
        count++;
    }
}
console.log(`number of a: ${count}`);