# 4일차 - 7번 IOIOI
# 일단 이전 문자랑 현재 문자가 같다 = x
# I로 시작해야된다.
# I의 개수는 N+1, O의 개수는 N
# 문자열을 한번 돌면서, I의 개수 누적, O의 개수 누적. 같은 문자열이 나오면 reset
import sys
from collections import defaultdict
input = sys.stdin.readline
N = int(input())
M = int(input())
S = input().rstrip()
cNum = defaultdict(int)
count = 0
for i, c in enumerate(S) :
    # 연속으로 같은 문자열이 들어온 경우.
    if i > 0 and c == S[i-1] :
        cNum['I'] = c == 'I' and 1 or 0
        cNum['O'] = 0
        continue

    if c == 'I' :
        cNum['I'] += 1
        if cNum['I'] == N+1 and cNum['O'] == N :
            count +=1
            cNum['I'] -= 1
            cNum['O'] -= 1
    elif cNum['I'] > 0 and c == 'O' :
        cNum['O'] += 1

print(count)