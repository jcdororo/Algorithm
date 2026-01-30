function solution(keymap, targets) {
    var answer = [];
    
    
    //타겟리스트만큼 반복한다.
    for (const target of targets) {
        let result = 0
        
        //리스트의 요소만큼 반복한다.
        for(let j = 0; j < target.length; j++) {
            // 요소가 키맵들중에 어떤것을 누를지 골라야한다.
            // 인덱스가 가장 작은거를 고른다.
            let minIndex = Infinity;
            
            for(let k = 0; k < keymap.length; k++) {
                const findIndex = keymap[k].indexOf(target[j])
                //console.log(keymap[k],target[j], keymap[k].indexOf(target[j]))
                if(findIndex >= 0 && findIndex < minIndex) {
                    minIndex = findIndex
                }
            }
            result += minIndex + 1
            
            //console.log('minIndex',minIndex + 1)
            
            //console.log(target, target[j])
        }
        //console.log(result)
        if(result === Infinity) {
            answer.push(-1)
        } else {
            answer.push(result)
        }
        //console.log()
    }
        
    
    
        
    
            
            
    
            // 거기서 몇번을 눌러야 되는지 카운트한다.
    
    return answer;
}