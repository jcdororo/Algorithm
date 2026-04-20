function solution(n, m, section) {
    var answer = 0;
    
    let painted = Array(n).fill(true)
    
    let mCount = m
    let point = 0
    
    for(let i = 0; i < section.length; i++) {
        painted[section[i]] = false   
    }
    console.log(painted)
    for(let i = 0; i< painted.length; i++) {
        if (!painted[i]) {
            painted[i] = true;
            
            if(point <= i) {
                point = i + m    
                answer++
            }
        } 
    }
    console.log(painted)
    
    return answer;
}