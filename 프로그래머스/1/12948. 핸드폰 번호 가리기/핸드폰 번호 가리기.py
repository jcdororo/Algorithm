def solution(phone_number):
    
    masked_number = '*' * (len(phone_number) - 4) + phone_number[-4:]
    
    return masked_number