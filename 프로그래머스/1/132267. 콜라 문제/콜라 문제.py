def solution(a, b, n):
    answer = 0
    
    while n >= a:
        
        coke = n % a
        getCoke = b * int(n / a)
        answer += getCoke
        n = coke + getCoke
        print(n,answer)
    
    
    return answer