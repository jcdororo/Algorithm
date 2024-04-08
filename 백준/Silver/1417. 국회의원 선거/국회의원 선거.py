import sys
from heapq import *

N = int(sys.stdin.readline().strip())

heap = []
for i in range(N):
  temp = int(sys.stdin.readline().strip())
  if i == 0:
    dasom = temp
    continue
  heappush(heap, -temp)

# print(heap)

cnt = 0
while heap:
  pop = -heappop(heap)
  if pop < dasom:
    break
  else:
    cnt += 1
    heappush(heap,-(pop - 1))
    dasom += 1

print(cnt)



