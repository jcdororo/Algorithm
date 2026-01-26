// /dev/stdin
const { time } = require("console");
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = parseInt(input[0]);
let start = 1;
let missions = 2;

for (let i = 1; i <= N; i++) {
  let answer = 0;
  const M = parseInt(input[start]);
  const kdaStart = M + missions;

  //console.log(start, M, missions, kdaStart);

  for (let j = 0; j < M; j++) {
    const [K, D, A] = input[missions + j].split(" ").map((x) => parseInt(x));
    const [k, d, a] = input[kdaStart].split(" ").map((x) => parseInt(x));
    //console.log(K, D, A);
    //console.log(k, d, a);

    //console.log(K * k, D * d, A * a, K * k - D * d + A * a);
    const rK = K * k;
    const rD = D * d;
    const rA = A * a;

    if (rK - rD + rA < 0) continue;
    answer += rK - rD + rA;
  }

  start += M + 2;
  missions = start + 1;

  console.log(answer);
  answer = 0;
}
