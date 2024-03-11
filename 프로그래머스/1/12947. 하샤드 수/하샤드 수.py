def solution(x):
    answer = True
    
    num = x
    sum = 0
    
    strNum = str(x)
    
    for x in strNum:
        sum += int(x)
        
    if num % sum == 0:
        answer = True
    else:
        answer = False
    
    return answer