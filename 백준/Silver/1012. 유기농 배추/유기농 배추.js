/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

const T = input[0];
let startPoint = 1;

for (let i = 1; i <= T; i++) {
  const [M, N, K] = input[startPoint].split(" ").map(Number);
  const board = Array.from({ length: N }, () => Array(M).fill(0));

  for (let j = startPoint + 1; j < startPoint + 1 + K; j++) {
    const [y, x] = input[j].split(" ").map(Number);

    board[x][y] = 1;
  }
  let result = 0;
  for (let k = 0; k < board.length; k++) {
    for (let l = 0; l < board[k].length; l++) {
      if (board[k][l] === 1) {
        bfs(board, k, l, N, M);
        result++;
      }
    }
  }

  startPoint += K + 1;
  console.log(result);
}

function bfs(board, k, l, N, M) {
  const queue = [];
  queue.push([k, l]);

  while (queue.length) {
    const [x, y] = queue.shift();

    //상
    if (x - 1 >= 0 && board[x - 1][y] === 1) {
      board[x - 1][y] = 0;
      queue.push([x - 1, y]);
    }
    //하
    if (x + 1 < N && board[x + 1][y] === 1) {
      board[x + 1][y] = 0;
      queue.push([x + 1, y]);
    }
    //좌
    if (y - 1 >= 0 && board[x][y - 1] === 1) {
      board[x][y - 1] = 0;
      queue.push([x, y - 1]);
    }
    //우
    if (y + 1 < M && board[x][y + 1] === 1) {
      board[x][y + 1] = 0;
      queue.push([x, y + 1]);
    }
  }
}
