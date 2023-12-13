/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)

let cnt = 0;
let result = 0
for(let i = 1; i <= n; i++) {
  if(n % i == 0) {
    cnt++
    if(cnt == k) {
      result = i
    }
  }
}

console.log(result)