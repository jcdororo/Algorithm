"""

"""
import sys


N = int(sys.stdin.readline().strip())
nums = []
arr = []
numPointer = 0
for i in range(N):
  inNum = int(sys.stdin.readline().strip())
  nums.append(inNum)
  arr.append(N - i)

stack = []

result = []
prints = []
for i in range(1, N + 1):

  stack.append(i)
  prints.append('+')
  while numPointer < N and nums[numPointer] == stack[-1]:
    result.append(stack.pop())
    numPointer += 1
    prints.append('-')
    if len(stack) == 0:
      break


if nums == result:
  for v in prints:
    print(v)
else:
  print('NO')
