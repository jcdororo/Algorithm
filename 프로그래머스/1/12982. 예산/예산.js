function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i++) {
        if (sum + d[i] > budget) {
            break;
        } else {
            sum += d[i]
            answer++
        }
    }
    
    return answer;
}