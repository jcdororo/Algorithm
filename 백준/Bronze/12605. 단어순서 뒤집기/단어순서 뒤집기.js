// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input[0]

for(let i = 1; i <= N; i++) {
    const arr = input[i].trim().split(' ').reverse()
    // console.log('arr',arr)
    console.log(`Case #${i}: ${arr.join(' ')}`)

}