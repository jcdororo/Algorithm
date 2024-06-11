// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

// let visited = []
// for(let i = 0; i < 7; i++) {
//     visited.push(false)
// }
// console.log(input, visited)

// const arr = []
// function dfs(depth) {
//     if(arr.length === 7) {
//         console.log(arr)
//         return
//     }

//     for(let i = 0; i < input.length; i++) {
//         if(!visited[i]) {
//             visited[i] = true;
//             arr.push(input[i])
//             dfs(depth + 1)
//             arr.pop()
//             visited[i] = false;
//         }
//     }
// }

// dfs(0)







function result () {
    for(let q = 0; q < input.length; q++) {
        for(let w = q+1; w < input.length; w++) {
            for(let e = w+1; e < input.length; e++) {
                for(let r = e+1; r < input.length; r++) {
                    for(let a = r+1; a < input.length; a++) {
                        for(let s = a+1; s < input.length; s++) {
                            for(let d = s+1; d < input.length; d++) {
                                const arr = [input[q],input[w],input[e],input[r],input[a],input[s],input[d]];
                                if (arr.reduce((acc, cur) => acc + cur, 0) === 100) {
                                    return arr.sort((a, b) => a - b);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
const answer = result();
answer.forEach((height) => console.log(height));
