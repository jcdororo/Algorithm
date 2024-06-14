// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')


function changeToFive(num) {
    let result = ''

    for(let i = 0; i < num.length; i++) {
        if(num[i] === '6') {
            result += '5'
            continue;
        } 

        result += num[i]
    }

    return Number(result)
}

function changeToSix(num) {
    let result = ''

    for(let i = 0; i < num.length; i++) {
        if(num[i] === '5') {
            result += '6'
            continue;
        } 

        result += num[i]
    }
    
    return Number(result)
}

console.log((changeToFive(input[0]) + changeToFive(input[1])) + ' ' + (changeToSix(input[0]) + changeToSix(input[1])))
// console.log(changeToSix(input[0]) + changeToSix(input[1]))



