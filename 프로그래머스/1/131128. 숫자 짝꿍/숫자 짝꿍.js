function solution(X, Y) {
    var answer = '';
    
    const arrX = Array(10).fill(0)
    const arrY = Array(10).fill(0)
    
    for (const char of X) {
        arrX[char]++
    }
    
    for(const char of Y) {
        arrY[char]++
    }
    
    //console.log(arrX, arrY)
    
    for(let i = 9; i >= 0; i--) {
        const cnt = Math.min(arrX[i], arrY[i])
        
        if(cnt > 0) {
            answer+=String(i).repeat(cnt)
            //console.log('cnt',cnt)
        }
    }
    
    
    if(answer === '') {
        return '-1'
    }
    
    if(answer[0] === '0') {
        return '0'
    }
    
    //console.log(answer)
    return answer;
}