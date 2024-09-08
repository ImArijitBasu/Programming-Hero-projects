/*
### Task-3: 

Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

---
*/


let str = 'the quick brown fox jumps over the lazy dog';
let vowels = [`a`, `e`, `i`, `o`, `u`];
let hasVowel = true;

str = str.toLowerCase();

for (let i = 0; i < vowels.length; i++) {
    if (!str.includes(vowels[i])) {
        hasVowel = false;
        break;
    }
}
// console.log(hasVowel);


function vowelContainer(strs) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    strs = strs.toLowerCase();
    let hasVowel = true;

    for (let i = 0; i < vowel.length; i++) {
        if (!strs.includes(vowel[i])) {
            hasVowel = false;
        }
        else {
            hasVowel = true;
        }
    }
    return hasVowel;
}
let str2 = 'the quick brown fox jumps over the lazy dog';
let str3 = 'arijit';
console.log(vowelContainer(str2));
console.log(vowelContainer(str3));