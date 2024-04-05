import sys

N, M = map(int, (sys.stdin.readline().strip().split(' ')))
arr = list(map(int, (sys.stdin.readline().strip().split(' '))))

def search(arr, target):
  left = 0
  right = max(arr)

  while left <= right:
    mid = (left + right) // 2
    total = 0

    for x in arr:
      if x >= mid:
        total += (x - mid)

    if total >= target:
      left = (mid + 1)
    else:
      right = (mid - 1)

  return right

print(search(arr, M))