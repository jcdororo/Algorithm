import sys
from collections import deque

N, K = map(int, sys.stdin.readline().strip().split(' '))
visited = [0] * 100001
# print(N, K)


def bfs(target):
  queue = deque()
  queue.append(target)

  while queue:
    pop = queue.popleft()
    # print(queue, pop == K)
    # print(visited[0:20])
    if pop == K:
      # print('asd',pop)
      return visited[pop]
    
    for d in [pop - 1, pop + 1, pop * 2]:
      if 0 > d or d >= 100001:
        continue

      if visited[d] == 0:
        visited[d] = visited[pop] + 1
        queue.append(d)


  return 0


print(bfs(N))
