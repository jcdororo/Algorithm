import sys
from heapq import *

N = int(sys.stdin.readline().strip()) 

heap = []

for i in range(N):
  heappush(heap,int(sys.stdin.readline().strip()))

answer = 0
while len(heap) > 1:
  temp = heappop(heap) + heappop(heap)

  sumVal = temp
  answer += sumVal
  heappush(heap, sumVal)

print(answer)
