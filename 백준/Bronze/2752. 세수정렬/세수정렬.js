/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

function compare(a, b) {
  return a - b;
}

input.sort(compare)

console.log(input.join(' '));