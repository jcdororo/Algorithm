// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const T = Number(input[1]);
let result = 0;
const graph = Array.from({ length: N + 1 }, () => Array());
for (let i = 2; i <= T + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array(N + 1).fill(false);

dfs(1);

function dfs(V) {
  visited[V] = true;

  for (const next of graph[V]) {
    if (!visited[next]) {
      result++;
      dfs(next);
    }
  }
}

console.log(result);
