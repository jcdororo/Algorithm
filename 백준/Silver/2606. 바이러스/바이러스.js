/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
// let graph = Array(n+1).fill([]);
let graph = [];
for(let i = 1; i <= n; i++) graph[i] = [];
let visited = Array(n+1).fill(false);
let answer = 0;


for(let i = 2; i <= m + 1; i++){
  let [a, b] = input[i].split(' ').map(Number);  
  graph[a].push(b);
  graph[b].push(a);
}

// console.log(graph)

dfs(graph, 1, visited)

console.log(answer - 1)

function dfs(graph, v, visited) {
  visited[v] = true;
  answer++
  
  for(i of graph[v]){
    if(!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
