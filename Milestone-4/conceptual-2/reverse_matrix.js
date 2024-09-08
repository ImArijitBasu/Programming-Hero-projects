let matrix = [
    [1, 2, 3],
    [5, 1, 4],
    [3, 6, 1]
]

console.log(matrix);
console.log('');

for(let i = 0; i< matrix.length ; i++){
    matrix[i].reverse();
}
matrix.reverse();
console.log(matrix);