/*
### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming

----
*/

function longestWord(str) {
    let newStr = str.split(' ');
    let word = ' ';
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length > word.length) {
            word = newStr[i];
        }
    }
    return word;

}
let str = 'my name is arijit basu';

console.log(longestWord(str));