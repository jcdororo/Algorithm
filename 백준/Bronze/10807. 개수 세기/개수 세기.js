/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = [...input[1].split(' ').map(Number)]
const v = Number(input[2]);
let result = 0


for(let i = 0; i < n.length; i++) {
  if(v == n[i]) {
    result += 1;
  }
}

console.log(result)
