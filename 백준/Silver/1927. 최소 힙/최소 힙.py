import sys
from heapq import *


N = int(sys.stdin.readline().strip())

heap = []

for _ in range(N):
  word = int(sys.stdin.readline().strip())
  if word == 0 and heap:
    print(heappop(heap))
  elif word == 0 and not heap:
    print('0')
  else:
    heappush(heap,word)