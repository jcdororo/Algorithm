/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

let result = [];
const N = Number(input[0]);
const visited = Array.from({ length: N }, () => Array(N).fill(false));

const board = [];
for (let i = 1; i <= N; i++) {
  board.push(input[i].split("").map(Number));
}

let danjisu = 0;

const queue = [];
//visited[0][0] = true;
//queue.push([0, 0]);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      queue.push([i, j]);
      result.push(bfs());
      danjisu++;
    }
  }
}

function bfs() {
  let cnt = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    cnt++;
    // 상
    if (x - 1 >= 0 && !visited[x - 1][y] && board[x - 1][y] === 1) {
      visited[x - 1][y] = true;
      queue.push([x - 1, y]);
    }
    // 하
    if (x + 1 < N && !visited[x + 1][y] && board[x + 1][y] === 1) {
      visited[x + 1][y] = true;
      queue.push([x + 1, y]);
    }
    // 좌
    if (y - 1 >= 0 && !visited[x][y - 1] && board[x][y - 1] === 1) {
      visited[x][y - 1] = true;
      queue.push([x, y - 1]);
    }
    // 우
    if (y + 1 < N && !visited[x][y + 1] && board[x][y + 1] === 1) {
      visited[x][y + 1] = true;
      queue.push([x, y + 1]);
    }
  }
  return cnt;
}
console.log(String(danjisu));
console.log(result.sort((a, b) => a - b).join("\n"));
