/*
!5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

let first = [ 12 , 134 , 15 , 17 , 123 , 453 ,341];
let second = [ 243 , 2131 ,1 , 35 , `234 ERSF`, 'ADS'];
let mixed = first.concat(second);


// !emniiii 

console.log(mixed);
console.log(mixed.length);
mixed.pop();
mixed.pop();
mixed.pop();
mixed.pop();
console.log(mixed);
console.log(mixed.length);
mixed.push('MY name is Arijit basu');
console.log(mixed);
let indexing = mixed.indexOf(17);
console.log(indexing);
let joining = first.join('|');
console.log(joining);
let slicing = mixed.slice(1 , 3);
console.log(slicing);
let spliceing = mixed.splice(1, 3);
console.log(spliceing);
