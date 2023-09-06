let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const a = Number(input[0]);


let b = 1;

for(let i = 1; i <= a; i++){
  b *= i;
}

console.log(b);