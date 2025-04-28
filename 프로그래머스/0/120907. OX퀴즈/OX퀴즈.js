function solution(quiz) {
    var answer = [];
    
    quiz.map(v => answer.push(isOk(v) ? 'O' : 'X'))
    
    return answer;
}


function isOk(quiz) {
    const arrSplit = quiz.split(' ');
    const x = parseInt(arrSplit[0])
    const operator = arrSplit[1]
    const y = parseInt(arrSplit[2])
    const z = parseInt(arrSplit[4])
    
    return operator == '+' ? x + y == z : x - y == z
    
}


