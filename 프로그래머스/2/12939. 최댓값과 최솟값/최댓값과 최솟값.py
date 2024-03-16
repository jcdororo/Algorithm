def solution(s):
    s = s.split(' ')
    numMin = 1e9
    numMax = -1e9
    
    for n in s:
        if numMin >= int(n):
            numMin = int(n)
        
        if numMax <= int(n):
            numMax = int(n)
    
    return str(numMin) + ' ' + str(numMax)
