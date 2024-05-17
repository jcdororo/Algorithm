import sys

from collections import deque

N, K = map(int, sys.stdin.readline().strip().split(' '))
answer = []
queue = deque()

for i in range(1, N + 1):
    queue.append(i)

queue.rotate(-K + 1)

for _ in range(N):
    answer.append(str(queue.popleft()))
    queue.rotate(-K + 1)
    # print('queue',queue)

print('<' +', '.join(answer) + '>')