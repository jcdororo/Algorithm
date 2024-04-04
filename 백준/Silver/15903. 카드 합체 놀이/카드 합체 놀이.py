import sys
from heapq import *                   # heapq 임포트

N, M = map(int, sys.stdin.readline().strip().split(' '))
cards = list(map(int, sys.stdin.readline().strip().split(' ')))


heapify(cards)
cnt = 0

for i in range(M):
  temp1 = heappop(cards)
  temp2 = heappop(cards)

  heappush(cards, temp1 + temp2)
  heappush(cards, temp1 + temp2)

print(sum(cards))