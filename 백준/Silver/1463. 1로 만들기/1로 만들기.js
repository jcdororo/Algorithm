/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

const N = Number(input);

const dp = Array(N+1).fill(0);


for(let i = 2; i <= N; i++){
  // i 에서 1을뺄때
  dp[i] = dp[i - 1] + 1;
  
  // 2로 나누어 떨어질 때
  if(i % 2 == 0){
    dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
  }

  // 3으로 나누어 떨어질 때
  if(i % 3 == 0) {
    dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
  }
  
}

console.log(dp[N])