/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const arr = [0, ...input[1].split(' ').map(Number)];

let sum = 0;
for (let i = 1; i <= N; i++) {
  if (i <= X) sum += arr[i];
}

let maxSum = sum;
let count = 1;

// 슬라이딩 윈도우
let left = 1;
let right = X;

while(true) {

  if(right > N){
    break;
  }
  
  //let sum = maxSum + arr[right + 1] - arr[left];
  sum = sum + arr[right + 1] - arr[left];


  if(sum > maxSum) {
    maxSum = sum;
    count = 1;
  } else if(sum == maxSum){
    count += 1;
  }
  left += 1;
  right += 1;
  
}

if(maxSum == 0) {
  console.log('SAD')
} else {
  console.log(maxSum);
  console.log(count);

}

