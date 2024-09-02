/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
let i = 61;
for(i ; i<100 ; i++){
    if(i%2 !== 0){
        console.log(i);
    }
    else if(i%2 === 0){
        console.log(i);
    }
}

let j = 78;
for(j ; j<98 ; j++){
    if(j%2 === 0){
        console.log(j);
    }
}