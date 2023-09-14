// /dev/stdin
// ./input.txt
const input = require('fs')
              .readFileSync('/dev/stdin')
              .toString()
              .split('\n')
              .map(Number);

const a = input[0];
let arr = [];
let answer = '';

for(let i = 1; i <= a; i++){
  arr.push(input[i])
}
arr.sort((a, b) => a - b);


answer = arr.join('\n')


console.log(answer)
