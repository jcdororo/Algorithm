/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++) {
  arr.push(input[i])
}

const set = [...new Set(arr)]

set.sort(compare);

// console.log(set.join('\n'))
for(let x of set) {
  console.log(x);
}



function compare(a, b) {

  if(a.length === b.length) {
    if(a < b) {
      return -1;
    } else if(a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  return a.length - b.length
}