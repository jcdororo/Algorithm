// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
let answer = "";
const board = [];
for (let i = 1; i <= N; i++) {
  board.push(input[i].split(""));
}

let visited = Array.from({ length: N + 1 }, () => Array(N).fill(false));
let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      result++;
      dfs(i, j, board[i][j]);
    }
  }
}
answer = result + " ";

function dfs(x, y, color) {
  visited[x][y] = true;
  // 상
  if (x - 1 >= 0 && board[x - 1][y] === color && !visited[x - 1][y]) {
    dfs(x - 1, y, color);
  }
  // 하
  if (x + 1 < N && board[x + 1][y] === color && !visited[x + 1][y]) {
    dfs(x + 1, y, color);
  }
  // 좌
  if (y - 1 >= 0 && board[x][y - 1] === color && !visited[x][y - 1]) {
    dfs(x, y - 1, color);
  }
  // 우
  if (y + 1 < N && board[x][y + 1] === color && !visited[x][y + 1]) {
    dfs(x, y + 1, color);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === "G") {
      board[i][j] = "R";
    }
  }
}

visited = Array.from({ length: N + 1 }, () => Array(N).fill(false));

result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      result++;
      dfs(i, j, board[i][j]);
    }
  }
}
answer = answer + result;
console.log(answer);
