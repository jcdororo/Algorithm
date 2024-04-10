import sys
from collections import Counter


n = int(sys.stdin.readline().strip())
arr = list(map(int, sys.stdin.readline().strip().split(' ')))

count = Counter(arr)
stack = []
result = [-1] * n
for i in range(n):
  while stack and count[arr[stack[-1]]] < count[arr[i]]:
    pop = stack.pop()
    result[pop] = arr[i]

  stack.append(i)

print(*result)