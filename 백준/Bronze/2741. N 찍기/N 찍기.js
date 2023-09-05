let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const a = Number(input[0]);
// const b = Number(input[1]);
let str = '';


for (var i = 1; i <= a; i++) {
  str += i + '\n';
}
console.log(str);