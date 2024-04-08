import sys

N = int(sys.stdin.readline().strip())
numN = list(map(int, sys.stdin.readline().strip().split(' ')))
M = int(sys.stdin.readline().strip())
numM = list(map(int, sys.stdin.readline().strip().split(' ')))
numN.sort()

def search(arr, target):
  left = 0
  right = len(arr) - 1
  # print('arr',arr,'target',target)
  while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
      return 1
    elif target <= arr[mid]:
      right = mid - 1
    else:
      left = mid + 1

  return 0

for m in numM:
  print(search(numN, m))