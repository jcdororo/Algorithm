/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const n = input[0];

let dp = Array(n+1).fill(0);

dp[1] = 1; // 1
dp[2] = 2; // 11, 2
dp[3] = 4; // 111, 12, 3, 21


for(let x = 1; x <= n; x++) {
  for(let i = 4; i <= input[x]; i++) {
    dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
  }
  console.log(dp[input[x]])
}
