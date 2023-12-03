/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let queens = [];
let cnt = 0;



dfs(0);
console.log(cnt);


function dfs(row) {
  // 재귀함수를 빠져나가는 로직
  if(row == N) {
    cnt += 1;
  }

  for(let i = 0; i < N; i++) {
    if(possible(row, i)) { // 퀸을 놓을 수 있다면 
      queens.push([row, i]);
      dfs(row + 1) // 재귀함수 호출
      queens.pop();
    } else {

    }
  }
}

function possible(x, y) { // (x, y) 위치에 퀸을 놓을 수 있는지 확인
  for (let [a, b] of queens) { // 현재까지 놓았던 모든 퀸(queen)의 위치를 하나씩 확인하며
    if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
    if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선에 위치한 경우 놓을 수 없음
  }
  return true;
}