function solution(hp) {
    var answer = 0;
    
    let tempHp = hp;
    
    if (tempHp >= 5) {
        const ants = parseInt(tempHp / 5);
        answer += ants
        tempHp -= ants * 5
    }
    
    if (tempHp >= 3) {
        const ants = parseInt(tempHp / 3);
        answer += ants
        tempHp -= ants * 3
    }
    
    if (tempHp >= 1) {
        const ants = parseInt(tempHp / 1);
        answer += ants
        tempHp -= ants * 1
    }
    
    
    return answer;
}