import sys

N = int(sys.stdin.readline().strip())

arr = []
for i in range(N):
  arr.append(list(map(int,sys.stdin.readline().strip().split(' '))))
arr.sort()
# print(arr)

maxVal = 0
maxIndex = 0
for i in range(N):
  if arr[i][1] >= maxVal:
    maxVal = arr[i][1]
    maxIndex = i
# print(maxIndex)

total = 0
maxHeight = 0
for i in range(0, maxIndex):
  maxHeight = max(maxHeight,arr[i][1])
  # print(abs(arr[i+1][0] - arr[i][0]), maxHeight)
  total += abs(arr[i+1][0] - arr[i][0]) * maxHeight

# print(total)

maxHeight = 0
for i in range(len(arr) - 1, maxIndex, - 1):
  maxHeight = max(maxHeight,arr[i][1])
  # print(abs(arr[i-1][0] - arr[i][0]), maxHeight)
  total += abs(arr[i-1][0] - arr[i][0]) * maxHeight

total += arr[maxIndex][1]

print(total)