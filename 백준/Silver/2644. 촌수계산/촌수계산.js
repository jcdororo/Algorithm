// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const [person1, person2] = input[1].split(" ").map(Number);
const M = Number(input[2]);
const visited = Array(N + 1).fill(false);
const graph = Array.from({ length: N + 1 }, () => Array());
let answer = -1;

for (let i = 3; i <= M + 2; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

dfs(person1, 0);

function dfs(curr, cnt) {
  visited[curr] = true;

  if (curr === person2) {
    answer = cnt > answer ? cnt : answer;
  }

  for (const next of graph[curr]) {
    if (!visited[next]) {
      dfs(next, cnt + 1);
    }
  }
}

console.log(answer);
