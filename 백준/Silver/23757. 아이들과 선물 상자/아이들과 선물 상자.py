import sys
from heapq import *


N, M = map(int, sys.stdin.readline().strip().split(' '))
answer = '1'
presents = []
for i in map(int, sys.stdin.readline().strip().split(' ')):
  heappush(presents,-i)

children = []
for i in map(int, sys.stdin.readline().strip().split(' ')):
  # heappush(children, -i)
  children.append(i)

# print(presents, children)
while children:
  present = -heappop(presents)
  # child = -heappop(children)
  child = children.pop(0)
  # print(present >= child,present ,child,presents, children)
  if present >= child:
    heappush(presents, -(present - child))
  else:
    answer = '0'
    break

print(answer)

