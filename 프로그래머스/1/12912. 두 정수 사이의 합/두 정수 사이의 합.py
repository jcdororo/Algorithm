def solution(a, b):
    answer = 0
    arr = [a, b]
    numMin = min(arr)
    numMax = max(arr)
    
    # print(numMin, numMax)
    
    for x in range(numMin, numMax + 1):
        answer += x
    return answer