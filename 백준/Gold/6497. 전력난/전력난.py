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
  parent = [i for i in range(V)]
  edges.sort(key= lambda x : x[2])
  result = 0

  for edge in edges:
    a, b, cost = edge
    
    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)
      result += cost

  # print(parent)
  return result
while True:

  M, N = map(int ,sys.stdin.readline().split(' '))
  if M == 0 and N == 0:
    break
  # print(M, N)
  houses = []
  totalCost = 0
  for i in range(N):
    a, b, cost = map(int ,sys.stdin.readline().split(' '))
    houses.append((a, b, cost))
    totalCost += cost
    # print(a, b, cost)

  print(totalCost - kruskal(houses, M))





