/*
### Task-3: 
Write a function to count the number of vowels in a string.

---
*/

function vowelCalc(str ){
    str = str.toLowerCase().split('');
    // str = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i<str.length ; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;

}

let word = 'my name is Arijit basu';
console.log(vowelCalc(word));