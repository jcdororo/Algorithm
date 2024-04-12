"""

"""
import sys
from heapq import *
                                  
N = int(sys.stdin.readline().strip())   

heap = []
for i in range(N):
  arr = list(map(int, sys.stdin.readline().strip().split(' ')))
  
  for v in arr:
    heappush(heap,v)
    if len(heap) > N:
      heappop(heap)

print(heap[0])