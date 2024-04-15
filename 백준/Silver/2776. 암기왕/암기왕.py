"""
"""
import sys
from heapq import *


def search(arr, target):
  left = 0
  right = len(arr) - 1

  while left <= right:
    mid = (left + right) // 2

    if arr[mid] == target:
      return 1
    elif arr[mid] < target:
      left = mid + 1
    else:
      right = mid - 1

  return 0

T = int(sys.stdin.readline().strip())




for _ in range(T):
  N = int(sys.stdin.readline().strip())
  note1 = list(map(int ,sys.stdin.readline().strip().split(' ')))
  M = int(sys.stdin.readline().strip())
  note2 = map(int ,sys.stdin.readline().strip().split(' '))

  note1.sort()

  for m in note2:
    print(search(note1, m))

