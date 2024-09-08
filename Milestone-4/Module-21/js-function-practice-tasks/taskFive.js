/*
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
*/

function odd_even(num){
    if(num % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

let number = 40;
console.log(odd_even(number));