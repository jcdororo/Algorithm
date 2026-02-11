/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

const [N, M] = input[0].split(" ").map(Number);

const maze = input.slice(1).map((x) => x.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [];
queue.push([0, 0, 1]);
visited[0][0] = true;

while (queue.length > 0) {
  const [x, y, dist] = queue.shift();
  if (x === N - 1 && y === M - 1) {
    console.log(dist);
    break;
  }
  //상
  if (x - 1 >= 0 && !visited[x - 1][y] && maze[x - 1][y] === 1) {
    visited[x - 1][y] = true;
    queue.push([x - 1, y, dist + 1]);
  }

  //우
  if (y + 1 < M && !visited[x][y + 1] && maze[x][y + 1] === 1) {
    visited[x][y + 1] = true;
    queue.push([x, y + 1, dist + 1]);
  }

  //하
  if (x + 1 < N && !visited[x + 1][y] && maze[x + 1][y] === 1) {
    visited[x + 1][y] = true;
    queue.push([x + 1, y, dist + 1]);
  }
  //좌
  if (y - 1 >= 0 && !visited[x][y - 1] && maze[x][y - 1] === 1) {
    visited[x][y - 1] = true;
    queue.push([x, y - 1, dist + 1]);
  }
}
