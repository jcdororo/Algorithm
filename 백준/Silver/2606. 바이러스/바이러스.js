// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const M = Number(input[1]);

const visited = Array.from({ length: N + 1 }).fill(false);
const graph = Array.from({ length: N + 1 }, () => []);

let cnt = 0;

for (let i = 2; i < M + 2; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const queue = [];
queue.push(1);
visited[1] = true;

while (queue.length) {
  const current = queue.shift();
  for (const next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      queue.push(next);
      cnt++;
    }
  }
}

console.log(cnt);
