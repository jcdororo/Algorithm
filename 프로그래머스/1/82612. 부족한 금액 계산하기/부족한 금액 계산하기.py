def solution(price, money, count):
    
    allPrice = 0
    
    for x in range(1, count + 1):
        allPrice += x * price
    
    if money - allPrice < 0:
        return abs(money - allPrice)
    else:
        return 0
        
