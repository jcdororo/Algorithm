import sys

from collections import deque


N = int(sys.stdin.readline().strip())

queue = deque()

for _ in range(N):
  S = str(sys.stdin.readline().strip())
  if 'push' in S:
    _, num = S.split(' ')
    queue.append(int(num))

  if 'pop' in S:
    if queue:
      print(queue.popleft())
    else:
      print('-1')

  if 'size' in S:
    print(len(queue))

  if 'empty' in S:
    if queue:
      print('0')
    else:
      print('1')

  if 'front' in S:
    if queue:
      print(queue[0])
    else:
      print('-1')

  if 'back' in S:
    if queue:
      print(queue[-1])
    else:
      print('-1')