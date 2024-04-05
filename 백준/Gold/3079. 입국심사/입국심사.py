import sys

N, M = map(int, sys.stdin.readline().strip().split(' '))
arr = []
for _ in range(N):
  arr.append(int(sys.stdin.readline().strip()))

def search(arr, target):
  left = min(arr)
  right = max(arr) * target
  answer = right
  while left <= right:

    mid = (left + right) // 2
    temp = [0 for x in arr]

    for i in range(len(arr)):
      temp[i] = mid // arr[i]

    # print('temp',temp,mid)

    if sum(temp) >= target:
      right = mid - 1
      answer = min(answer,mid)
    else:
      left = mid + 1


  return answer

print(search(arr, M))