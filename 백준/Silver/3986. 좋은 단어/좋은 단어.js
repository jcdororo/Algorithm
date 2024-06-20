// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])

let answer = 0;

for(let i = 1; i <= N; i++) {
    const word = input[i].trim()
    let arr = Array.from(word)
    let temp = []
    let boolPass = true

    for(let j = 0; j < arr.length; j++) {
        if(temp.length == 0) {
            temp.push(arr[j])
        } else {
            if(temp.at(-1) === arr[j]) {
                temp.pop()
            } else {
                temp.push(arr[j])
            }
        }
    }

    if(temp.length !== 0) {
        boolPass = false
    } else {
        answer++;
    }
}

console.log(answer)