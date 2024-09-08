let str = "education";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let containsAllVowels = true;

for (let i = 0; i < vowels.length; i++) {
    if (!str.includes(vowels[i])) {
        containsAllVowels = false;
        break;
    }
}

console.log(containsAllVowels); // true
