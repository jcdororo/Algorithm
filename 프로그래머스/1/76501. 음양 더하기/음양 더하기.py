def solution(absolutes, signs):
    answer = 123456789
    sum = 0
    for index, num in enumerate(absolutes):
        if(signs[index]):
            sum += num
        else:
            sum -= num
            
    answer = sum
        
    return answer