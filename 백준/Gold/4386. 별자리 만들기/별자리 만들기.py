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



import sys
from itertools import combinations


N = int(sys.stdin.readline().strip())

dots = []
for i in range(1, N + 1):
  x, y = map(float, sys.stdin.readline().split(' '))
  dots.append([x, y])

indexDots = list(enumerate(dots))
edges = []

orders = combinations(indexDots, 2)
for order in orders:
  x1, y1 = order[0][1]
  x2, y2 = order[1][1]
  # print(x1,y1,x2,y2)
  V = 0
  if x1 == x2:
    V = abs(y1 - y2)
  elif y1 == y2:
    V = abs(x1 - x2)
  else:
    temp = ((x1-x2)**2) + ((y1-y2)**2)
    V = round(temp**(1/2),2)
  
  edges.append((order[0][0] + 1, order[1][0] + 1, V))

print(kruskal(edges, N))