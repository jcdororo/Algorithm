const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    const n = Number(input[0]);
    let answer = ''
    let star = '*'
    for(let i = 1; i <= n; i++) {
        answer += (star + '\n')
        star += '*'        
        
    }
    console.log(answer)
});