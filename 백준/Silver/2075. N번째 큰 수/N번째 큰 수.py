import sys
from heapq import *

N = int(sys.stdin.readline().strip())

heap = []

for i in range(N):
  arr = map(int, sys.stdin.readline().strip().split(' '))
  for a in arr:
    heappush(heap,a)
    if len(heap) >= N+1:
      heappop(heap)



print(heap[0])
