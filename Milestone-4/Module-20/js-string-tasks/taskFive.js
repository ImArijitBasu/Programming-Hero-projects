/*
Capitalize Every first Letter of each word in a String
*/
/*
let str = "i'm arijit basu";

let strNew = str.split(' ');
console.log(strNew);
console.log(strNew[1]);
strLast = strNew[1].split('');
console.log(strLast);
let upper = strLast[0];
console.log(upper);
console.log(typeof upper);
upper = upper.toUpperCase();
console.log(upper);
*/
// console.log(strNew[0].charAt(0).toUpperCase() + strNew[0].slice)

let str = "i'm arijit basu . i am a developer";
let words = str.split(" ");
let blankStr = [];

for(let i = 0 ; i < words.length; i++ ){
    let word = words[i];
    if(word.length > 0){
        let blank = word[0].toUpperCase() + word.slice(1);
        blankStr.push(blank);
    }
    else {
        blankStr.push(word);
    }
}
let newStr = blankStr.join(" ");
console.log(newStr);

// here first we declared the variable . then we split this variable and make it an array . then we declare a blank string . 
// then we started a for loop where i = 0 and i < words length . then we store i number of words( as words indexing) in a variable called word 
// then we start if else condition . if word length > 0 (the word has 1 or more words) the condition will be applied , otherwise it will push the word into the blank string directly
// in the if condition we made a variable called blank , in this variable we will store - first word after capitalizing + last words . then we push this into the blank string .
// every time the loop starts a word from words variable will be stored after capitalizing the first letter in blankstr variable .
// at last we join the blankstr and make it a string and print it . 
