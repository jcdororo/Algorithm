/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 노드, 간선, 시작
const [N, M, V] = input[0].split(' ').map(Number);
  
let graph = [];

for(let i = 0; i <= N; i++) {
  graph.push([]);
}
for(let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  graph[x].push(y)
  graph[x].sort((a, b) => a - b);
  graph[y].push(x)
  graph[y].sort((a, b) => a - b);
}

// console.log(graph)

let visited = Array(N+1).fill(false);
let dfsLine = '';
let bfsLine = '';


dfs(graph, V, visited);

visited = Array(N+1).fill(false);
bfs(graph, V, visited);
console.log(dfsLine)
console.log(bfsLine)



function dfs(graph, v, visited) {
  visited[v] = true;
  dfsLine += v + ' '
  
  for(i of graph[v]) {
    if(!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

function bfs(graph, start, visited) {
  let queue = [];
  queue.push(start);

  visited[start] = true;

  while(queue.length != 0) {
    let v = queue.shift();
    bfsLine += (v + ' ');
    for(i of graph[v]) {
      if(!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }

}

