function solution(k, m, score) {
    var answer = 0;
    const repeat = Math.floor(score.length / m)
    
    score.sort((a,b) => b - a)
    
    for(let i = 0; i < repeat; i++) {
    
        const p = score[i * m + (m-1)] // 0, 2, 4, 6
        
        answer += p * m
    }
    
    
    return answer;
}