def solution(num):
    answer = 0
    if num == 1:
        return 0
    for x in range(0, 500+1):
        if num % 2 == 0:
            num /= 2
            answer += 1
        else:
            num = num * 3 + 1
            answer += 1
        
        
        if num == 1:
            return answer
            break
            
    return -1