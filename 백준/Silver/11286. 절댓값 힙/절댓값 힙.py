import sys
from heapq import *


N = int(sys.stdin.readline().strip())
heap = []

for _ in range(N):
  x = int(sys.stdin.readline().strip())

  if x == 0:
    if heap:
      print(heappop(heap)[1])
    else:
      print(0)

  if x != 0:
    heappush(heap, (abs(x), x))



