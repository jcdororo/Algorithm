def solution(a, b):
    answer = 0
    
    for i,x in enumerate(a):
        answer += a[i] * b[i]
        
    return answer