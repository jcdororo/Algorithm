/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Array(Number(input[0].split(' ')[0])).fill(0);
const M = Number(input[0].split(' ')[1])

for(let x = 1; x <= M; x++) {
  const [i, j, k] = input[x].split(' ').map(Number);
  for(let y = i; y <= j; y++) {
    N[y-1] = k;
  }
}

console.log(N.join(' '))