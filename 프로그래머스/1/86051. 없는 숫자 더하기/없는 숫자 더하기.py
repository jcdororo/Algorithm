def solution(numbers):
    answer = 0
    for x in range(0, 9 + 1):
        if x not in numbers:
            answer += x
    return answer