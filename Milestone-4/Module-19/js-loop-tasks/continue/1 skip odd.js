/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i = 1;
for(i ; i<=40 ; i++){
    if(i%2 != 0){
        continue;
    }
    else if(i%2 === 0){
        console.log(i);
    }
}