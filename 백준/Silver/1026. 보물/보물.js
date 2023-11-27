/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let A = input[1].split(' ').map(Number).sort((a,b) => a-b);
let B = input[2].split(' ').map(Number).sort((a,b) => b-a);
let result = 0;


for(let i = 0; i < N; i++){
  result += A[i] * B[i];
}

console.log(result);