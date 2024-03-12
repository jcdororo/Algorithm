def solution(left, right):
    answer = 0
    
    for x in range(left, right + 1):
        arrAtom = []
        
        for y in range(1, x + 1):
            if x % y == 0:
                arrAtom.append(y)
                
        
        if len(arrAtom) % 2 == 0:
            answer += x
        else :
            answer -= x
    
    return answer