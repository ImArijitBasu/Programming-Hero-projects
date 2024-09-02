

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let i = 91;
for (i; i <= 129; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        sum += i;
    }
}
console.log(sum);

let sum = 0;
let j = 51;
for (j; j <= 85; j++) {
    if (j % 2 === 0) {
        console.log(j);
        sum += j;

    }
}
console.log(sum);
