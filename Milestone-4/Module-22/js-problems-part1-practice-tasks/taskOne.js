/*
### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.

---
*/

function celsiusToFahrenheit(cel){
    let fah = (cel * 9/5) + 32;
    return fah;
}

let celcius = celsiusToFahrenheit(32);
console.log(Math.floor(celcius));