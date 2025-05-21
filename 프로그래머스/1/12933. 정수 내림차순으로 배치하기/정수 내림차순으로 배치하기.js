function solution(n) {
    var answer = String(n).split('').map(v => parseInt(v));
    answer.sort((a, b) => b - a)
    return parseInt(answer.join(''));
}