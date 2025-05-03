function solution(my_string, n) {
    var answer = '';
    
    for(let i = 0; i < my_string.length; i++) {
        let tempWord = ''
        for(let j = 0; j < n; j++) {
            tempWord += my_string[i]         
        }
         
        answer += tempWord
    }
    return answer;
}