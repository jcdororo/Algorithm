def findRoot(parent, x):
  if parent[x] != x:
    parent[x] = findRoot(parent, parent[x])
  return parent[x]

def union(parent, a, b):
  a = findRoot(parent, a)
  b = findRoot(parent, b)

  if a < b:
    parent[b] = a
  else:
    parent[a] = b

def kruskal(edges, V):
  parent = [i for i in range(V + 1)]
  edges.sort(key= lambda x : x[2])
  result = 0

  for edge in edges:
    a, b, cost = edge
    # 사이클이돌지 않는다면
    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)
      result += cost

  return result

import sys


V, E = map(int, sys.stdin.readline().strip().split(' '))

edges = []
for _ in range(E):
  a, b, cost = map(int, sys.stdin.readline().strip().split(' '))
  edges.append((a, b, cost))

print(kruskal(edges, V))