/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

const N = Number(input[0]);
const board = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));

const queue = [];
queue.push([0, 0]);
visited[0][0] = true;

while (queue.length > 0) {
  const [x, y] = queue.shift();
  if (board[x][y] === -1) {
    console.log("HaruHaru");
    return;
  }
  const jump = board[x][y];

  // 아래
  if (jump + x < N && !visited[x + jump][y]) {
    visited[x + jump][y] = true;
    queue.push([x + jump, y]);
  }

  // 오른쪽
  if (jump + y < N && !visited[x][y + jump]) {
    visited[x][y + jump] = true;
    queue.push([x, y + jump]);
  }
}

console.log("Hing");
