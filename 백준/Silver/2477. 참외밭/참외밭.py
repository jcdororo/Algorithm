import sys


K = sys.stdin.readline().strip()
arr = []
for _ in range(6):
  arr.append(list(map(int, sys.stdin.readline().strip().split(' '))))

arr += arr

for i in range(len(arr)):
  if arr[i][0] == arr[i+2][0] and arr[i+1][0] == arr[i+3][0]:
    big = arr[i-1][1] * arr[i-2][1]
    small = arr[i+1][1] * arr[i+2][1]
    break

print((big - small) * int(K))

  