import sys
from heapq import *

T = int(sys.stdin.readline().strip())


for _ in range(T):
  K = int(sys.stdin.readline().strip())
  arr = list(map(int, sys.stdin.readline().strip().split(' ')))
  heapify(arr)
  
  total = 0


  while arr:
    if len(arr) >= 2:
      temp = heappop(arr) + heappop(arr)
    elif len(arr) == 1:
      # temp = heappop(arr)
      break
    
    total += temp
    heappush(arr, temp)
    # print(arr, total)

  print(total)