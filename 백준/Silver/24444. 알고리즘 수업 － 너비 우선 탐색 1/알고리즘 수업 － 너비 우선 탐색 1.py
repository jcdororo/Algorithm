import sys
from collections import deque


N, M, R= map(int, sys.stdin.readline().strip().split(' '))
graph = [[] for _ in range(N + 1)]  # 그래프 변수
visited = [False] * (N + 1)         # 방문처리 변수 
race = [0 for _ in range(N + 1)]    # 몇번째에 방문했는지 변수
cnt = 1

for i in range(M):                  # 무방향 그래프 이므로
  u, v = map(int, sys.stdin.readline().strip().split(' '))  
  graph[u].append(v)                # 양쪽모두 
  graph[v].append(u)                # 연결 해 준다
# print(graph)

for i in range(len(graph)):
  graph[i].sort()

def bfs(idx):
  global cnt
  queue = deque()
  queue.append(idx)

  visited[idx] = True
  race[idx] = cnt

  while queue:
    pop = queue.popleft()
    for i in graph[pop]:
      if not visited[i]:
        cnt += 1
        race[i] = cnt

        queue.append(i)
        visited[i] = True



bfs(R)
# print(race)

for i in race[1:]:
  print(i)
