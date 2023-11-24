/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')


const INF = 1e9;
const n = Number(input[0]);
const m = Number(input[1]);
let graph = [];
for(let i = 0; i < n+1; i++){
  let temp = [];
  for(let j = 0; j < n+1; j++){
    temp.push(INF);
  }
  graph.push(temp);
}

for(let i = 2; i <= m+1; i++){
  let [cur, next, cost] = input[i].split(' ');
    graph[cur][next] = Math.min(graph[cur][next],cost);
}
for(let i = 1; i < n+1; i++) {
  graph[i][i] = 0;
}

// console.log(graph)
/*
const graph = [
  [INF,INF,INF,INF,INF,INF],
  [INF,0,2,3,1,10],
  [INF,INF,0,INF,2,INF],
  [INF,8,INF,0,1,1],
  [INF,INF,INF,INF,0,3],
  [INF,7,4,INF,INF,0],
]
*/
// 점화식 d[a][b] = min(d[a][b],d[a][k] + d[k][b])
for(k = 1; k < n+1; k++){
  for(a = 1; a < n+1; a++){
    for(b = 1; b < n+1; b++){
      let temp = graph[a][k] + graph[k][b]
      graph[a][b] = Math.min(graph[a][b], temp);
    }
  }
}

// 출력
for(let i = 1; i < graph.length; i++) {
  let line = ''
  for(let j = 1; j < graph.length; j++) {
    if(graph[i][j] == INF) {
      line += '0' + ' '
    } else {
      line += graph[i][j] + ' '
    }
  }
  console.log(line);
}

// console.log(graph.length)