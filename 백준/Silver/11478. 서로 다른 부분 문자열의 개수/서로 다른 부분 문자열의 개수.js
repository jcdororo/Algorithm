// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const s = input[0].replace('\r','')

let set = new Set()

for(let i = 0; i < s.length; i++) {
  for(let j = i; j < s.length; j++) {
    set.add(s.slice(i,j+1))
  }
}

console.log(set.size)