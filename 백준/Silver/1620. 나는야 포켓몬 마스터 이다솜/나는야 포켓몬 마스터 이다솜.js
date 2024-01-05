// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)

let name = {}
let num = {}
let result = '';
for(let i = 1; i <= n; i++) {
  name[i] = (input[i].replace('\r',''));
  num[(input[i].replace('\r',''))] = i;
}

for(let i = n+1; i < n+m+1; i++) {
  // console.log(name[input[i].replace('\r','')],input[i])
  if(!isNaN(input[i])) {
    result += name[input[i].replace('\r','')] + '\n'
  } else {
    result += num[input[i].replace('\r','')] + '\n'
  }
}

console.log(result)
