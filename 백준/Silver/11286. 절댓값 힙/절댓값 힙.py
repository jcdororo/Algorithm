import sys
from heapq import *                   # heapq 임포트


N = int(sys.stdin.readline().strip())

heap = []
for i in range(N):
  s = int(sys.stdin.readline().strip())
  if s == 0:
    if len(heap) == 0:
      print('0')
    else:
      print(heappop(heap)[1])
  if s != 0:
    heappush(heap,[abs(s),s])
