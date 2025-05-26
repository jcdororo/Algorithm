function solution(s) {
    var answer = [];
    let cases = {}
    
    for(let i = 0; i < s.length; i++) {
        const preIndex = cases[s[i]]
        cases[s[i]] = i
        const index = s.indexOf(s[i])
        if(index === i) {
            answer.push(-1)
        } else {
            answer.push(i - preIndex)
        }
    }
    
    return answer;
}