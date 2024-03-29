# 입력 받기
n = int(input())
cards = list(map(int, input().split()))
m = int(input())
targets = list(map(int, input().split()))

# 각 숫자가 몇 개씩 있는지 저장할 딕셔너리 초기화
card_count = {}

# 카드 숫자들을 세기
for card in cards:
    if card in card_count:
        card_count[card] += 1
    else:
        card_count[card] = 1

# 결과 출력
result = []
for target in targets:
    if target in card_count:
        result.append(card_count[target])
    else:
        result.append(0)

# 결과 출력
print(' '.join(map(str, result)))
