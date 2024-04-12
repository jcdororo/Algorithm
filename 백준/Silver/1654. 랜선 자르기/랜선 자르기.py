"""

"""
import sys
from heapq import *
                                  
K, N = map(int, sys.stdin.readline().strip().split(' '))
lan = [int(sys.stdin.readline().strip()) for _ in range(K)]
# print(lan)

def search(arr, target):
  left = 0
  right = max(arr)
  result = 0
  while left <= right:
    mid = (left + right) // 2
    tempArr = [x for x in arr]

    for i in range(len(tempArr)):
      if tempArr[i] != 0 and mid != 0:
        tempArr[i] = tempArr[i] // mid
    # tempArr = list(map(lambda x : x // mid, tempArr))
    # print(sum(tempArr), tempArr,mid)

    if sum(tempArr) < target:
      right = mid - 1
    else:
      left = mid + 1

  return right



print(search(lan, N))



  

