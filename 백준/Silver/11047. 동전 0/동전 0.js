/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = parseInt(input[0].split(' ')[0]);
let price = parseInt(input[0].split(' ')[1]);
const arrCoins = [];
let coinCount = 0;

for(let i = 1; i < count + 1; i++) {
  arrCoins.push(parseInt(input[i]));
}

// arrCoins.sort((a,b) => b - a);


for(let i = arrCoins.length - 1; i >= 0; i--) {
    coinCount += parseInt(price / arrCoins[i]);
    price %= arrCoins[i];
  
}

console.log(coinCount);