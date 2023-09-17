// console.time();
// /dev/stdin
// ./input.txt
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');



const a = input[0];

answer = [];


for (let i = 1; i < input.length; i++) {
  if(answer.indexOf(input[i]) === -1) {
    answer.push(input[i]);
  }
}

answer.sort((a, b) => a.localeCompare(b))
      .sort((a, b) => a.length - b.length)
      .forEach(i => console.log(i));



