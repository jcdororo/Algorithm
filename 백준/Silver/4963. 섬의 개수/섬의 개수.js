/*
  📖 풀이한 문제
  ⭐️ 문제에서 주로 사용한 알고리즘
  대략적인 코드 설명
  
*/
// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let start = 0;

while(true) {
  if(start == input.length - 1) break;

  // width, height
  const [w, h] = input[start].split(' ').map(Number)  
  if(w == 0 && h == 0) continue;
  // 카운트 변수
  let cnt = 0;
  // 지도 만들기
  let map = [];
  for(let i = 0; i < h; i++) {
    map.push([])
  }
  for(let i = start; i < start + h; i++) {
    const land = input[i+1].split(' ').map(Number)
    for(let j = 0; j < land.length; j++) {
      map[i - start][j] = land[j]
    }
  }
  // console.log('map',map)
  // visited 만들기
  let visited = [];
  for(let i = 0; i < h; i++) {
    visited.push(Array(w).fill(false))
  }
  // console.log(visited)

  for(let i = 0; i < map.length; i++) {
    for(let j = 0; j < map[i].length; j++) {
      if(visited[i][j] == false && map[i][j] == 1) {
        dfs(i,j);
        cnt++
      }
    }
  }

  // 상하 좌우 왼상 우하 우상 좌하 함수
  function dfs(x, y) {

    // 예외처리면 return
    if((x < 0) 
    || (x >= map.length) 
    || (y < 0) 
    || (map[x].length <= y) 
    || (visited[x][y]) == true
    || map[x][y] == 0) return;
    
    visited[x][y] = true;
    dfs(x-1,y)    // 상
    dfs(x+1,y)    // 하
    dfs(x, y-1)   // 좌
    dfs(x, y+1)   // 우
    dfs(x-1,y-1)  // 왼상
    dfs(x+1,y+1)  // 우하
    dfs(x-1,y+1)  // 우상
    dfs(x+1,y-1)  // 좌하
  }

  console.log(cnt)




  

  start += h + 1
}