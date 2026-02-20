// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const [R, C] = input[0].split(" ").map(Number);
let answer = 0;
const board = [];
for (let i = 1; i <= R; i++) {
  board.push(input[i].split(""));
}

let visitedWord = "";
let cnt = 1;

visitedWord += board[0][0];
dfs(0, 0, cnt, visitedWord);

function dfs(i, j, cnt, word) {
  answer = cnt > answer ? cnt : answer;
  // 상
  if (i - 1 >= 0 && word.indexOf(board[i - 1][j]) === -1) {
    dfs(i - 1, j, cnt + 1, word + board[i - 1][j]);
  }

  // 하
  if (i + 1 < R && word.indexOf(board[i + 1][j]) === -1) {
    dfs(i + 1, j, cnt + 1, word + board[i + 1][j]);
  }

  // 좌
  if (j - 1 >= 0 && word.indexOf(board[i][j - 1]) === -1) {
    dfs(i, j - 1, cnt + 1, word + board[i][j - 1]);
  }

  // 우
  if (j + 1 < C && word.indexOf(board[i][j + 1]) === -1) {
    dfs(i, j + 1, cnt + 1, word + board[i][j + 1]);
  }
}
console.log(answer);
