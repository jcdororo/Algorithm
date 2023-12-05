/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

const set = [...new Set([A, B, C])]
let result = 0;

if(set.length == 1) {
  result += 10000+(set[0]*1000)
} 

if(set.length == 2) {
  let temp = [A, B, C];
  let num = 0;
  for(let i = 0; i < set.length; i++) {
    let a = 0;
    for(let j = 0; j < temp.length; j++) {
      if(set[i] == temp[j]) {
        a++
      }
    }
    if(a == 2) num = set[i];
  }
  result += 1000+(num*100);
}


if(set.length == 3) {
  result += (Math.max(...set)*100)
}

console.log(result)