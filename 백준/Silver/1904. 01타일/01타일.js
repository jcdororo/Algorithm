/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

let N = BigInt(input);
let dpTable = Array(1000000).fill(0);

dpTable[1] = 1;
dpTable[2] = 2;

/*
1 = 1 // 1
2 = 00, 11 // 2
3 = 100, 001, 111 // 3
4 = 0011, 0000, 1001, 1100, 1111 // 5

an = an-1 + an-2
*/
for(let i = 3; i <= N; i++){
  dpTable[i] = (dpTable[i-1] + dpTable[i-2]) % 15746;
}
console.log(dpTable[N])
