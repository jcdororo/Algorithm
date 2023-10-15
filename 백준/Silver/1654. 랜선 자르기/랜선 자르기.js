/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const [N, M] = input[0].split(' ').map(Number);
let arr = [];

for(let i = 1; i < N + 1; i++) {
  arr.push(input[i]);
}

let start = 1;
let end = Math.max(...arr);
let result = 0;

while(start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for(x of arr){
    total += parseInt(x / mid);
  }

  if(total >= M) {
    result = mid;
    start = mid + 1;
  }

  if(total < M){
    end = mid - 1;
  }
  
  
}

console.log(result)