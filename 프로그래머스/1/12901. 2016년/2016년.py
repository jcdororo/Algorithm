from datetime import date

def solution(a, b):
    
    arrWeek = ['THU', 'FRI', 'SAT','SUN', 'MON', 'TUE','WED']
    lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    sumNumber = arrWeek[(sum(lastDay[:a-1]) + b) % 7]
    print(sumNumber)
    
    

    return sumNumber