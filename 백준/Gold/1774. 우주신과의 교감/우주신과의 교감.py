"""
"""
import sys
import math

from itertools import combinations

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

  for a, b in connections:
    union(parent, a, b)

  # print(parent)

  for edge in edges:
    a, b, cost = edge

    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)
      result += cost

  return result

N, M = map(int, sys.stdin.readline().strip().split(' '))

graph = []

coordinate = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(N)]

connections = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(M)]

orders = combinations(enumerate(coordinate), 2)

for order in orders:
  x, y = order
  index1 = x[0]
  index2 = y[0]
  x1, y1 = x[1]
  x2, y2 = y[1]

  # if x1 == x2:
  #   graph.append((index1 + 1, index2 + 1, abs(y1 - y2)))
  #   # graph.append((index2 + 1, index1 + 1,abs(y1 - y2)))
  # elif y1 == y2:
  #   graph.append((index1 + 1, index2 + 1, abs(x1 - x2)))
  #   # graph.append((index2 + 1, index1 + 1, abs(x1 - x2)))
  # elif x1 != x2 and y1 != y2:
  #   weight = round((((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** (1/2), 2)
  #   graph.append((index1 + 1, index2 + 1, weight))
    # graph.append((index2 + 1, index1 + 1, weight))

  dist = math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  # print('di',dist)
  graph.append((index1 + 1, index2 + 1, dist))

# print(graph)

result = kruskal(graph, N)
print(f"{result:.2f}")

  

