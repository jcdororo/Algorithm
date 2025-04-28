function solution(slice, n) {
    let answer = 1;
    
    if (slice == n) return 1
    
    while(true) {
        
        if ((slice * answer) >= n) {
            break
        } else {
            answer++
        }
        
    }
  
    
    return answer;
}