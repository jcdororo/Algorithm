"""
33188kb	56ms
"""
import sys

N = int(sys.stdin.readline().strip())
arrN = list(map(int, sys.stdin.readline().strip().split(' ')))
M = int(sys.stdin.readline().strip())
arrM = list(map(int, sys.stdin.readline().strip().split(' ')))
arrN.sort()

def search(arr, target):
  left = 0
  right = len(arr) - 1

  while left <= right:
    mid = (left + right) // 2

    if arr[mid] == target:
      return True
    elif arr[mid] > target:
      right = mid -1
    else:
      left = mid + 1

  return False

for m in arrM:
  if search(arrN, m):
    print('1', end=' ')
  else:
    print('0', end=' ')