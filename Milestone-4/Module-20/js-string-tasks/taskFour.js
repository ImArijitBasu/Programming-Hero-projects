/*
### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

---
*/

let str = 'i am e-man';
// let str2 = 'I am -man';

// strNew = str.includes('x');
// console.log(strNew);

// console.log(str.replace('x' , 'y'));

if (str.includes('x')) {
    console.log(str.replace('x', 'y'));

}
else if (str.includes('X')) {
    console.log(str.replace('X', 'Y'));
}
else {
    console.log(str = 'error');
}

