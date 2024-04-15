"""
"""
import sys


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
  result = 0
  edges.sort(key= lambda x : x[2])

  for edge in edges:
    a, b, cost = edge

    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)
      result += cost

  return result

N = int(sys.stdin.readline().strip())

arr = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(N)]


graph = []
for i in range(len(arr)):
  for j in range(len(arr)):
    graph.append((i, j, arr[i][j]))


result = kruskal(graph, N)
print(result)

  

