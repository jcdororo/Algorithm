let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const a = Number(input[0]);

let b = '';

for(let i = a; i > 0; i--){
  console.log('*'.repeat(i))
}