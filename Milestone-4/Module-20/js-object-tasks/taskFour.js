/*

### Task-4

Count the `number of properties`.

**Input:**
<br>
```js
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
```
*/


let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let last = Object.keys(student);
console.log(last.length);