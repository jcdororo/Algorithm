def solution(food):
    answer = '0'
    left = ''
    right = ''
    
    for i in range(1, len(food)):
        cnt = int(int(food[i]) / 2)
        for j in range(cnt):
            left += str(i)
            right = str(i) + right
            
        
    
    return left + answer + right