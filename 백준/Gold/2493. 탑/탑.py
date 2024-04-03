import sys
from collections import deque

N = int(sys.stdin.readline().strip())
arr = list(map(int, sys.stdin.readline().strip().split(' ')))

result = [0] * N

stack = deque()

for i in range(N - 1, -1, -1):
  while stack and (arr[i] > arr[stack[-1]]):
    index = stack.pop()
    result[index] = i + 1

  stack.append(i)

print(*result)
  