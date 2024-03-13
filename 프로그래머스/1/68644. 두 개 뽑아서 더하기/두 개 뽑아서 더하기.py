from itertools import combinations

def solution(numbers):
    answer = []
    
    for combo in combinations(numbers, 2):
        answer.append(sum(combo))
    
    answer = set(answer)
    answer = list(answer)
    
    answer.sort()
    
    
    return answer