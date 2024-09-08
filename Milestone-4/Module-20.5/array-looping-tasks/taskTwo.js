/*### Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

**Input:**
`const numbers = [12, 98, 5, 41, 23, 78, 46];`

**Output:**

`[12, 98, 76, 46]`
*/

let arr = [12,98,5,41,23,78,46];
let even = [];
for(let word of arr){
    if(word % 2 === 0){
        even.push(word);
    }
}
console.log(even);