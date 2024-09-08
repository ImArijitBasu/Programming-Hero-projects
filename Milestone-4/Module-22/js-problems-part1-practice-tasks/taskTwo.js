/*
### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0



----
*/



function countNumber(number , find){
    let count = 0 ;

    for(let i = 0 ; i < number.length ; i++){
        if(number[i] === find){
            count ++;
            continue;
        }
    }

    return count;

}

let number = [5,6,11,12,98, 5];
let find = 5;
console.log(countNumber(number , find));