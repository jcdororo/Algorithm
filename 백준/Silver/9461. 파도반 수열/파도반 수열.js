/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);


const T = input[0];
const N = [];
for(let i = 1; i <= T; i++){
  N.push(input[i]);
}


let dp = Array(101).fill(0);
let result = '';

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for(let j = 0; j < T; j++){
  for(let i = 6; i <= N[j]; i++){
    dp[i] = dp[i-1] + dp[i-5];
  }
  result += dp[N[j]] + '\n';
}
  

console.log(result)