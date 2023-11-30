/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const N = input[0];
let arr = [...input];
arr.shift();

let result = 0;

for(let i = 0; i < N; i++) {
  let temp = 1;
  for(let j = i; j < N; j++){
    temp *= arr[j];
    result = Math.max(result, temp);
  }
}


console.log(result.toFixed(3));