// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => Array());

for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array(N).fill(false);

let result = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    result++;
    visited[i] = true;
    dfs(i);
  }
}

function dfs(i) {
  for (const next of graph[i]) {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next);
    }
  }
}

console.log(result);
