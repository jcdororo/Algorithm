/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const chess = [1, 1, 2, 2, 2, 8];
const t = input[0].split(' ').map(Number);



for(let i = 0; i < t.length; i++) {
  t[i] = chess[i] - t[i]
}

console.log(t.join(' '))