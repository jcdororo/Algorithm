import sys

from collections import deque

N = int(sys.stdin.readline().strip())
queue = deque()

for i in range(1, N + 1):
    queue.append(i)

while True:
    
    if len(queue) == 1:
        break
    queue.popleft()

    if len(queue) == 1:
        break

    queue.append(queue.popleft())

print(queue[0])