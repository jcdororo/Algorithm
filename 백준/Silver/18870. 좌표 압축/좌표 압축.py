import sys

N = int(sys.stdin.readline().strip())
arr = list(map(int, sys.stdin.readline().strip().split(' ')))

X = sorted(set(arr))

# dic = {}

# for i in range(len(X)):
#   dic[str(X[i])] = i
dic = {X[i] : i for i in range(len(X))}

  
# answer = ''
for v in arr:
  # answer += str(dic[v]) + ' '
  print(dic[v], end = ' ')

# print(answer)