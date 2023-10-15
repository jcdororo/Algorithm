/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);
const tree = input[1].split(' ').map(Number);
  
let start = 1;
let end = Math.max(...tree);
let result = 0;

while(start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for(x of tree) {
    let temp = 0;
    if (x - mid < 0) {
      temp = 0;
    } else {
      temp = x - mid;
    }
      
    total += temp;    
  }

  if(total >= M) {
    result = mid;
    start = mid + 1;
  }
  if(total < M) {
    end = mid - 1;
  }

  
}

console.log(result);