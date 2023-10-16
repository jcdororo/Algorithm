/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const arrN = input[1].split(' ').map(Number);
const M = Number(input[2]);
const arrM = input[3].split(' ').map(Number);

arrN.sort((a, b) => a - b);

let answer = '';

for(let i = 0; i < M; i++){
  const lower = lowerBound(arrN, arrM[i], 0, N);
  const upper = upperBound(arrN, arrM[i], 0, N);

  answer += (upper - lower) + ' ';
}

console.log(answer)
















function lowerBound (arr, target, start, end) {
  while(start < end) {
    let mid = parseInt((start + end) / 2);
    if(arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}




function upperBound (arr, target, start, end) {
  while(start < end) {
    let mid = parseInt((start + end) / 2);
    if(arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
