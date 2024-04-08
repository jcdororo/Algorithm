import sys
from heapq import *

N = int(sys.stdin.readline().strip())

heap = []

for i in range(N):
  temp = sys.stdin.readline().strip()
  if temp == '0':
    if heap:
      print(-heappop(heap))
    else:
      print(-1)
  else:
    temp = temp.split(' ')

    for price in temp[1:]:
      heappush(heap,-int(price))
