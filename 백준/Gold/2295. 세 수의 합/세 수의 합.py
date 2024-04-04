import sys
from itertools import permutations, combinations

N = int(sys.stdin.readline().strip())   # N 최대 1000 따라서 O(N^2)까지가능
# 사실 3중for문으로 찾을 수 있지만 시간초과가 나옴
# 문제풀이
#    x + y + z = k 이고
# == x + y = k - z 이다.
# array를 2중 for문 순회하여
# i + j (x + y와 동일) 를 모으고
# array를 2중 for문 순회하여
# i - j (k - z와 동일) 이 array(x + y)안에 있는지 찾는다.
# 찾아서 array[i] 가 큰 수일것은 자명한 사실이니 array[i]를 모아서
# 그 중 가장 큰 수를 출력하면 정답 !

arr = []
for i in range(N):
  arr.append(int(sys.stdin.readline().strip()))

xy = set()
for x in arr:
  for y in arr:
    xy.add(x + y)

kz = []
for k in range(N -1, -1, -1):   # 그리드 접근법으로 큰수부터
  for z in range(N):
    if arr[k] - arr[z] in xy:
      kz.append(arr[k])

print(max(kz))
