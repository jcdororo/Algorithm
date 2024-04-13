"""
44272kb	236ms
"""
import sys
from heapq import *

N, M = map(int, sys.stdin.readline().split(' '))
heap = list(map(int, sys.stdin.readline().split(' ')))

heapify(heap)

total = 0

for _ in range(M):
  temp = heappop(heap) + heappop(heap)
  

  heappush(heap, temp)
  heappush(heap, temp)

print(sum(heap))