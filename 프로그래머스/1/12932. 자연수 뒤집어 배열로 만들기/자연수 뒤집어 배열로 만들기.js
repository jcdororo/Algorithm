function solution(n) {
    var answer = String(n).split('').reverse().map(v => parseInt(v));
    return answer;
}