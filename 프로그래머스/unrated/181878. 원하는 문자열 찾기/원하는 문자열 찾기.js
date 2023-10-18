function solution(myString, pat) {
    var answer = 0;
    const a = myString.toUpperCase();
    const b = pat.toUpperCase();
    
    if(a.includes(b)) return 1;
    return answer;
}