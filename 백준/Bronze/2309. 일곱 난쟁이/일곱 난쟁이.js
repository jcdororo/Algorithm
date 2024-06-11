const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function findDwarfs() {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            for (let k = j + 1; k < input.length; k++) {
                for (let l = k + 1; l < input.length; l++) {
                    for (let m = l + 1; m < input.length; m++) {
                        for (let n = m + 1; n < input.length; n++) {
                            for (let o = n + 1; o < input.length; o++) {
                                const dwarfs = [input[i], input[j], input[k], input[l], input[m], input[n], input[o]];
                                if (dwarfs.reduce((sum, height) => sum + height, 0) === 100) {
                                    return dwarfs.sort((a, b) => a - b);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const answer = findDwarfs();
if (answer) {
    answer.forEach(height => console.log(height));
}