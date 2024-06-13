// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


for(let i = 0; i < input.length; i++) {
    if(input[i] == 0) {
        break;
    }
    const arrK = input[i].split(' ').map(Number)
    const [k, ...arr] = arrK

    // console.log(k, arr)

    for(let q = 0; q < arr.length; q++) {
        for(let w = q+1; w < arr.length; w++) {
            for(let e = w+1; e < arr.length; e++) {
                for(let r = e+1; r < arr.length; r++) {
                    for(let a = r+1; a < arr.length; a++) {
                        for(let s = a+1; s < arr.length; s++) {                            
                            console.log(arr[q],arr[w],arr[e],arr[r],arr[a],arr[s])                            
                        }
                    }
                }
            }
        }
    }
    console.log('')
}