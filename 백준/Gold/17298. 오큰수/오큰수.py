import sys

from collections import deque

N = int(sys.stdin.readline().strip())
arr = list(map(int, sys.stdin.readline().strip().split(' ')))

result = [-1] * N
stack = deque()

for i in range(N):

  while stack and (stack[-1][0] < arr[i]):
    temp, index = stack.pop()
    result[index] = arr[i]

  stack.append([arr[i], i])

print(*result)