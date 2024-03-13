import re

def solution(s):
    newS = s
    newS = re.sub(r'zero', '0', newS)
    newS = re.sub(r'one', '1', newS)
    newS = re.sub(r'two', '2', newS)
    newS = re.sub(r'three', '3', newS)
    newS = re.sub(r'four', '4', newS)
    newS = re.sub(r'five', '5', newS)
    newS = re.sub(r'six', '6', newS)
    newS = re.sub(r'seven', '7', newS)
    newS = re.sub(r'eight', '8', newS)
    newS = re.sub(r'nine', '9', newS)

    
    
    return int(newS)