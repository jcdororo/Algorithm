// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let m = Number(input[0]);
let line = ''

let div = 2;


//인수분해 시작
while(true) {
  if(m % div == 0) {
    line += (div + '\n')
    m /= div
  } else {
    div++
  }

  if(m == 1) {
    break;
  }
}

console.log(line)