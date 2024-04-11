import sys


N, M = map(int, sys.stdin.readline().strip().split(' '))
trees = list(map(int, sys.stdin.readline().strip().split(' ')))

# print(trees)
def search(arr, target):
  left = 0
  right = max(arr)
  result = 0
  while left <= right:
    mid = (left + right) // 2
    # temp = [x for x in arr]
    # for i in range(len(temp)):
    #   if temp[i] - mid >= 0:
    #     temp[i] -= mid
    #   else:
    #     temp[i] = 0
    # print(temp)    
        
    # print(temp, mid, left, right)
    total = 0
    for x in arr:
      if x >= mid:
        total += (x - mid)

    if total >= target:
      result = mid
      left = mid + 1
    else:
      right = mid - 1

  return result

print(search(trees, M))


