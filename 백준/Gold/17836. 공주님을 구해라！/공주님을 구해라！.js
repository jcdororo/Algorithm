// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const [n, m, t] = input[0].split(' ').map(Number)

let castle = [];
for(let i = 1; i <= n; i++) {
  castle.push(input[i].split(' ').map(Number))
}
const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function gram(a, b) {
  const q = []
  q.push({row : a, col : b, count : 0})

  let visited = [];
  for(let i = 1; i <= n; i++) {
    visited.push(Array(m).fill(false))
  }
  visited[a][b] = 1;

  while(q) {
    const temp = q.shift();
    if(temp == undefined) return t + 1

    const x = temp.row
    const y = temp.col
    const count = temp.count
    if(castle[x][y] == 2) {
      return count + (n + m - x - y - 2)
    }
    for(let i = 0; i < 4; i++) {
      const nx = dx[i] + x
      const ny = dy[i] + y
      if(nx < n && ny < m && nx >= 0 && ny >= 0) {
        if(castle[nx][ny] != 1 && !visited[nx][ny]) {
          visited[nx][ny] = 1
          q.push({row : nx, col : ny, count : count + 1})
        }
      }
    }
  }
  return t + 1
}

function princess(a, b) {
  const q = [];
  q.push({row : a, col : b, count : 0})
  
  let visited = [];
  for(let i = 1; i <= n; i++) {
    visited.push(Array(m).fill(false))
  }
  visited[a][b] = 1;
  while(q) {
    const temp = q.shift();
    if(temp == undefined) return t + 1
    const x = temp.row
    const y = temp.col
    const count = temp.count

    if(x == n - 1 && y == m - 1) {
      return count
    }

    for(let i = 0; i < 4; i++) {
      const nx = dx[i] + x
      const ny = dy[i] + y
      if(nx < n && ny < m && nx >= 0 && ny >= 0) {
        if(castle[nx][ny] != 1 && !visited[nx][ny]) {
          visited[nx][ny] = 1
          q.push({row : nx, col : ny, count : count + 1})
        }
      }
    }
  }
  return t + 1
}

const p = princess(0, 0)
const g = gram(0, 0)
const result = Math.min(p, g)

if(result <= t) {
  console.log(result)
} else {
  console.log('Fail')
}
