import sys

N = int(sys.stdin.readline().strip())
arr = [int(sys.stdin.readline().strip()) for _ in range(N)]
arr.sort()

# 산술평균
def average(arr):
  # print('avg', round(sum(arr) / len(arr)))

  # return abs(round(sum(arr) / len(arr)))
  return round(sum(arr) / len(arr))

# 중앙값
def middle(arr):
  temp = arr
  left = 0
  right = len(temp) - 1
  mid = (left + right) // 2

  return temp[mid]
  # return temp[len(temp)//2]

# 최빈값
def maxCount(arr):
  dic = {}
  for v in arr:
    if dic.get(str(v), False):
      dic[str(v)] += 1
    else:
      dic[str(v)] = 1

  maxCount = max(dic.values())


  temp = []
  for k, v in dic.items():
    if v == maxCount:
      temp.append(int(k))
  # print('temp',temp)

  return temp[1] if len(temp) > 1 else temp[0]

# 범위
def numRange(arr):

  return max(arr) - min(arr)

print(average(arr))
print(middle(arr))
print(maxCount(arr))
print(numRange(arr))