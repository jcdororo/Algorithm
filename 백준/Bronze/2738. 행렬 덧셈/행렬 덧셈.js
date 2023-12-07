/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [n, m] = input[0].split(' ').map(Number)



let result = '';

for(let i = 1; i <= n; i++) {
  const a = input[i].split(' ').map(Number);
  const b = input[i+n].split(' ').map(Number);

  for(let j = 0; j < a.length; j++) {
    result += (a[j]+b[j]) + ' '
  }
  result += '\n'
  
}

console.log(result)