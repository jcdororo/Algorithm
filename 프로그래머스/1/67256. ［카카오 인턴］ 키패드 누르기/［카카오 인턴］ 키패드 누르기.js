function solution(numbers, hand) {
    var answer = '';
    // const Phone = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9],
    //     ['*',0,'#']
    // ]
    let lPoint = [3,0]
    let rPoint = [3,2]
    
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            if (numbers[i] === 1) {
                lPoint = [0,0]
            } else if (numbers[i] === 4) {
                lPoint = [1,0]
            } else {
                lPoint = [2,0]
            }
            answer += 'L'
            console.log(numbers[i],'L',lPoint, rPoint)
            continue;
        }
        //console.log(answer)
        if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            if (numbers[i] === 3) {
                rPoint = [0,2]
            } else if (numbers[i] === 6) {
                rPoint = [1,2]
            } else {
                rPoint = [2,2]
            }
            answer += 'R'
            console.log(numbers[i],'R',lPoint, rPoint)
            continue;
        }
        
        
        if(numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
            const lRange = calFingerRange(lPoint, numbers[i])
            const rRange = calFingerRange(rPoint, numbers[i])
            
            if (lRange < rRange) {
                
                if (numbers[i] === 2) {
                    lPoint = [0,1]
                } else if (numbers[i] === 5) {
                    lPoint = [1,1]
                } else if (numbers[i] === 8) {
                    lPoint = [2,1]
                } else {
                    lPoint = [3,1]
                }
                
                answer += 'L'
                console.log(numbers[i],'L',lPoint, rPoint)
            } else if (lRange > rRange) {
                
                if (numbers[i] === 2) {
                    rPoint = [0,1]
                } else if (numbers[i] === 5) {
                    rPoint = [1,1]
                } else if (numbers[i] === 8) {
                    rPoint = [2,1]
                } else {
                    rPoint = [3,1]
                }
                
                answer += 'R'
                console.log(numbers[i],'R',lPoint, rPoint)
            } else {
                if (hand === 'right') {
                    
                    if (numbers[i] === 2) {
                        rPoint = [0,1]
                    } else if (numbers[i] === 5) {
                        rPoint = [1,1]
                    } else if (numbers[i] === 8) {
                        rPoint = [2,1]
                    } else {
                        rPoint = [3,1]
                    }
                    
                    answer += 'R'
                    console.log(numbers[i],'R',lPoint, rPoint)
                } else {
                    
                    if (numbers[i] === 2) {
                        lPoint = [0,1]
                    } else if (numbers[i] === 5) {
                        lPoint = [1,1]
                    } else if (numbers[i] === 8) {
                        lPoint = [2,1]
                    } else {
                        lPoint = [3,1]
                    }
                    
                    answer += 'L'
                    console.log(numbers[i],'L',lPoint, rPoint)
                }
            } 
            continue;
        }
        
    }
    
    return answer;
}

function calFingerRange(point, number) {
    let numberPoint = [0,0]
    
    if(number === 2) {
        numberPoint = [0,1]
    } else if(number === 5) {
        numberPoint = [1,1]
    } else if(number === 8) {
        numberPoint = [2,1]
    } else if(number === 0) {
        numberPoint = [3,1]
    } 
    
    
    
    // z-x해서 나온 [0]과[1]을 곱해서 나온 절댓값과
    // z-y해서 나온 [0]과[1]을 곱해서 나온 절댓값을
    // 리턴한다.
    
    return Math.abs(numberPoint[0] - point[0]) + Math.abs(numberPoint[1] - point[1])
    
    
}