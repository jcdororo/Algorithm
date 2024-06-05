let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


const C = input[0]


for(let i = 1; i <= C; i++) {
    const temp = input[i].split(' ').map(Number)
    const len = temp[0]
    let sum = 0
    let abg = 0
    let cnt = 0

    for(let j = 1; j <= len; j++) {
        sum += temp[j]
    }
    abg = (sum / len)

    for(let j = 1; j <= len; j++) {
        if(abg < temp[j]) {
            cnt++
        }
    }

    console.log(((cnt / len) * 100).toFixed(3) + '%')

        



}