// /dev/stdin
 const input = require('fs').readFileSync('/dev/stdin').toString()


let N = Number(input)
let loopN = Number(input)
let cnt = 0
let numLeft = 0
let numRight = 0


while(true) {
    // console.log("loopN",loopN)
    if(loopN < 10) {
        loopN = String(loopN)[0] + String(loopN)[0]
    } else {
        numLeft = String(loopN)[0]
        numRight = String(loopN)[1]
        sumNum = Number(numLeft) + Number(numRight)
        loopN = Number(numRight + String(sumNum).at(-1))
    }
    
    cnt++
    // console.log(loopN)

    if(N == loopN){
        console.log(cnt)
        break
    }




}
