/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let visited = Array(N).fill(false);
let arr = [];
for(let i = 0; i < N; i++){
  arr.push(nums[i]);
}
let selected = [];
let answer = '';

function dfs(arr, depth) {
  if(depth == M) {
    let temp = [];
    for(let x = 0; x < selected.length; x++) {
      answer += (selected[x] + ' ')
    }
    answer += '\n'
    return;
  }

  for(let i = 0; i < arr.length; i++) {

    if(!visited[i]) {
      visited[i] = true;
      selected.push(arr[i])
      dfs(arr, depth + 1)
      visited[i] = false;
      selected.pop();
    }
  
  }
}

dfs(arr, 0);

console.log(answer)




