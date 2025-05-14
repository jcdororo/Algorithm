function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % 2 && i % 2) {
            answer += i
            continue;
        } 
        if(n % 2 === 0 && i % 2 === 0) {
            answer += (i*i)
            continue;
        }
    }
    return answer;
}