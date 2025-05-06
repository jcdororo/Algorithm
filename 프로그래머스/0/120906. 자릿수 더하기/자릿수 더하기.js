function solution(n) {
    var answer = 0;
    const strN = String(n);
    
    for(let i = 0; i< strN.length; i++) {
        answer += parseInt(strN[i])
    }
    
    return answer;
}