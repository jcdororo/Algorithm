/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let bas = [];

for(let i = 1; i <= n; i++) {
  bas.push(i)
}

for(let x = 0; x < m; x++) {
  const [i, j] = input[x+1].split(' ').map(Number);
  [bas[i-1], bas[j-1]] = [bas[j-1], bas[i-1]];

}

console.log(bas.join(' '))
