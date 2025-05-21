function solution(x, n) {
    var answer = [];
    const a = x
    for(let i = 0; i < n; i++) {
        answer.push(x)
        x += a
    }
    
    return answer;
}