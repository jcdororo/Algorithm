def solution(arr1, arr2):
    answer = []
    
    for x in range(len(arr1)):
        result = [x + y for x, y in zip(arr1[x], arr2[x])]
        answer.append(result)
    
    
    return answer