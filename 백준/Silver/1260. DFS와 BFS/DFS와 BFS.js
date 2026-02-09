// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

const dfsResult = [];
const bfsResult = [];

for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

// 🔑 방문 순서 조건
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array.from({ length: N + 1 }, () => false);

dfs(graph, V, visited);

function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  dfsResult.push(v);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (const next of graph[v]) {
    if (!visited[next]) {
      dfs(graph, next, visited);
    }
  }
}
//////////////
visited = Array.from({ length: N + 1 }, () => false);

bfs(graph, V, visited);

function bfs(graph, v, visited) {
  const queue = [];
  queue.push(v);
  visited[v] = true;

  while (queue.length > 0) {
    const q = queue.shift(); // 큐의 맨 앞
    bfsResult.push(q);
    for (const next of graph[q]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
