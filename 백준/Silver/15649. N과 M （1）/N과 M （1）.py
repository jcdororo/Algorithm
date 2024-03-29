import sys

N, M = map(int,sys.stdin.readline().strip().split(' '))
arr = [str(x) for x in range(1, N + 1)]
visited = [False] * N

temp = []
def dfs(depth):
  if len(temp) == M:
    print(" ".join(temp))
    return

  for i in range(len(arr)):
    if not visited[i]:
      visited[i] = True
      temp.append(arr[i])
      dfs(depth + 1)
      temp.pop()
      visited[i] = False

dfs(0)
  

