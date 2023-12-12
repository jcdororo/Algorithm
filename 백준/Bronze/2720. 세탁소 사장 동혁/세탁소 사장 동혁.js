/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const t = input[0]

const [quar, di, ni, pe] = [25, 10, 5, 1]

for(let i = 1; i < input.length; i++) {
  let a = 0
  let b = 0
  let c = 0
  let d = 0
  let x = input[i];
  while(x >= 1) {
    if(x >= quar) {
      x -= quar
      a++
    } else if(x >= di) {
      x -= di
      b++
    } else if(x >= ni) {
      x -= ni
      c++
    } else if(x >= pe) {
      x -= pe
      d++
    } else {

    }
  }
  console.log(a + ' ' + b + ' ' + c + ' '+ d)
  
}
