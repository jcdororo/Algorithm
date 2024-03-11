function solution(s){
    s = s.toLowerCase()
    var answer = true;
    let pCnt = 0;
    let yCnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'p') {
            pCnt++
        }
        if(s[i] == 'y') {
            yCnt++
        }            
    }
    if(pCnt == 0 && yCnt == 0) {
        answer = true
    } else {
        answer = pCnt == yCnt
    }
    

    return answer;
}