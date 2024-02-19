// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim()

const n = Number(input)
let dp = Array(n + 1).fill(0)

dp[1] = 1
dp[2] = 3

for(let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[n] % 10007)