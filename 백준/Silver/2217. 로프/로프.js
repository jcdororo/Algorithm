/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arr = [];
let result = 0;


for(let i = 1; i <= N; i++){
  arr.push(Number(input[i]));
}

arr.sort((a,b) => a - b);


for(let i = 0; i < N; i++){
  result = Math.max(result,(arr[i]*(N-i)));
}

console.log(result+'');