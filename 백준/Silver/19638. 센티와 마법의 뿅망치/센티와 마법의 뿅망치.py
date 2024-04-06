import sys
from heapq import *


giant, sentiHeight, hammer = map(int, sys.stdin.readline().strip().split(' ')) 

result = 'NO'

giantHeights = []
heapify(giantHeights)

for i in range(giant):
  heappush(giantHeights, -int(sys.stdin.readline().strip()))

# print('giantHeights',giantHeights)

count = 0
for i in range(hammer):
  pop = -heappop(giantHeights)
  if pop == 1:
    heappush(giantHeights, -1)
  elif pop < sentiHeight:
    heappush(giantHeights, -pop)
    break
  else:
    heappush(giantHeights, -(pop / 2))
    count += 1

zero = -heappop(giantHeights)

# print(zero)
if zero < sentiHeight:
  print('YES')
  print(count)
else:
  print('NO')
  print(int(zero))
