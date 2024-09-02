/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let n = 1;

while (true) {
    sum += n;
    if (sum >= 100) {
        break;
    }
    n++;
}

console.log(` sum is ${sum}, last number is ${n}`);