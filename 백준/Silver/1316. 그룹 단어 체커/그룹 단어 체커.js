/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let result = 0;
let pass;
for(let i = 1; i <= n; i++) {
  let temp = input[i].split('');
  for(let j = 0; j < temp.length; j++) {
    pass = true;
    for(let x = j+1; x < temp.length; x++) {
      if(temp[j] == temp[x] && temp[x] != temp[x-1]) {
        pass = false;
        break;
      }
    }
    if(!pass) break
  }
  if(pass) result++
}

console.log(result)