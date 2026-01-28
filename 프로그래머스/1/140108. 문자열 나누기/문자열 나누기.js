function solution(s) {
    var answer = 0;
    
    let point = 0;
    let x = s[point];
    let xCount = 0;
    let yCount = 0;
    let isComplete = false;
    
    for(let i = 0; i < s.length; i++) {
        isComplete = false;
        console.log(x,s[i])
        if (x === s[i]) {
            xCount++
        } else {
            yCount++
        }
        console.log('xCount',xCount,'yCount',yCount)
        if (xCount === yCount) {
            point = i+1
            answer++
            xCount = 0
            yCount = 0
            x = s[point]
            isComplete = true;
        }
    }
    
    if (isComplete === false) {
        answer++
    }
    
    return answer;
}