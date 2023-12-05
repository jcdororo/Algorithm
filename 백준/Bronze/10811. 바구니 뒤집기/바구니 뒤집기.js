/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let bas = [];
for(let i = 1; i <= n; i++){
  bas.push(i)
}
for(let i = 1; i <= m; i++){
  let [a, b] = input[i].split(' ').map(Number);
  let temp = []
  for(let i = a-1; i <= b-1; i++) {
    temp.push(bas[i]);
  }
  temp.reverse();
  let w = 0
  for(let i = a-1; i <= b-1; i++) {
    bas[i] = temp[w];
    w++;
  }
}

console.log(bas.join(' '))
