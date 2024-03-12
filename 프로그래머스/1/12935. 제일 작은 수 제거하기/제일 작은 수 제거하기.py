def solution(arr):
    if len(arr) <= 1:
        return [-1]
    
    minNum = min(arr)
    
    arr = [x for x in arr if x != minNum]
    
    return arr