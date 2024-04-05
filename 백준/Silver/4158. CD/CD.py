import sys

while (1):
  N, M = map(int, sys.stdin.readline().split())
  if N == 0 and M == 0:
    break

  arr1 = [int(sys.stdin.readline()) for _ in range(N)]
  targets = [int(sys.stdin.readline()) for _ in range(M)]
  result = 0

  for target in targets:
    left = 0
    right = N - 1

    while left <= right:
      mid = (left + right) // 2

      if arr1[mid] == target:
        result += 1
        break
      elif arr1[mid] > target:
        right = mid - 1
      elif arr1[mid] < target:
        left = mid + 1
    

  print(result)

