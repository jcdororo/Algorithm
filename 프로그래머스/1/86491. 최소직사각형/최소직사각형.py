def solution(sizes):
    answer = []
    
    for size in sizes:
        size.sort()
    
    width = [x[0] for x in sizes]
    height = [x[1] for x in sizes]
    
    
    
    
    
    
    return max(width) * max(height)