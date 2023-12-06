/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let result = [];
// 4, 3, 2, 1, 0, 1, 2, 3, 4
// 1, 3, 5, 7, 9, 7, 5, 3, 1
// 윗트리

for(let x = 0; x < n; x++) {
  let temp = [];
  for(let i = x+1; i < n; i++) {
    temp.unshift(' ');
  }

  for(let j = 0; j < (x*2)+1; j++) {
    temp.push('*');
  }
  temp = temp.join('')
  result.push(temp)
}
// 아랫트리
for(let x = n-2; x >= 0; x--) {
  let temp = [];
  for(let i = x+1; i < n; i++) {
    temp.unshift(' ');
  }

  for(let j = 0; j < (x*2)+1; j++) {
    temp.push('*');
  }
  temp = temp.join('')
  result.push(temp)
}

console.log(result.join('\n'))
