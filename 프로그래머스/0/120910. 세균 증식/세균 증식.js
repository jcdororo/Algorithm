function solution(n, t) {
    var answer = 0;
    
    let virus = n
    const time = t
    
    for(let i = 0; i < t; i++) {
        virus = virus * 2
    }
    
    answer = virus
    
    return answer;
}