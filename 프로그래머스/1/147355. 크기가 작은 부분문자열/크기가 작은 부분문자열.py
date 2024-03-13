def solution(t, p):
    answer = 0
    pLen = len(p)
    
    for i in range(0, len(t) - pLen + 1):
        
        if int(t[i:i+pLen]) <= int(p):
            answer += 1
        
    return answer