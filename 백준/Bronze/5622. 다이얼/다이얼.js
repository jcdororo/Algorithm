/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const t = input[0].split('');
let result = 0;

let phone = Array(10)
phone[2] = 'ABC'
phone[3] = 'DEF'
phone[4] = 'GHI'
phone[5] = 'JKL'
phone[6] = 'MNO'
phone[7] = 'PQRS'
phone[8] = 'TUV'
phone[9] = 'WXYZ'

for(let i = 0; i < t.length; i++) {
  for(let j = 2; j < phone.length; j++) {
    if(phone[j].includes(t[i])) {
      result += (j+1)
      break;
    }
  }
}
console.log(result)