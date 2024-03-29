import sys
from itertools import permutations

N, M = map(int,sys.stdin.readline().strip().split(' '))     # N, M
arr = list(map(int,sys.stdin.readline().strip().split(' ')))# N의 요소들
answer = set()                      # set 객체 선언

# arr.sort()                          # 요소들 sort

orders = permutations(arr, M)       # permutations는 리스트와 같은 
                                    # iterable 객체에서 r개의 데이터를 뽑아 
                                    # 일렬로 나열하는 모든 경우를 계산해준다.
for order in orders:                # 요소를 뽑아 set에 add하고
  answer.add(order)

for x in sorted(answer):            # sor
  print(" ".join(map(str,[y for y in x])))


