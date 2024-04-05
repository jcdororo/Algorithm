import sys

N = int(sys.stdin.readline().strip())
arr = list(map(int, sys.stdin.readline().strip().split(' ')))
arr.sort()

# print(N, arr)
def search(arr):
  left = 0
  right = N - 1

  answer = abs(arr[left] + arr[right])
  index = [str(arr[left]), str(arr[right])]

  while left < right:
    sumNum = arr[left] + arr[right]
    temp = abs(sumNum)
    # print(answer, 'temp',temp,'sum',arr[left],arr[right])

    if temp < answer:
      answer = temp
      index = [str(arr[left]), str(arr[right])]
      if answer == 0:
        break

    if sumNum < 0:
      left += 1
    else:
      right -= 1
      
  return index

print(' '.join(search(arr)))
  

