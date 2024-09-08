/*### Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

**Input:**
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`
*/

let arr = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';
for(let word of arr){
    // result += word;
    result = result + word ;
}
console.log(result);