import sys
X, Y = list(map(int, sys.stdin.readline().split(' ')))
cnt = 0
# Z = int((Y / X) * 100)
Z=(100*Y)//X

#0부터 X의 10%

def search():
  left = 0
  right = X
  answer = right

  while left <= right:
    mid = (left + right) // 2
    # 검증로직
    # temp = int(((Y+mid) / (X+mid)) * 100)
    temp = (100*(Y+mid))//(X+mid)

    # print(Z, temp, left, right,Y+mid,X+mid)
    if temp > Z:
      answer = mid
      right = mid - 1
    else:
      left = mid + 1

  return answer

if Z >= 99:
  print('-1')
else:
  print(search())

