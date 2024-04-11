
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
  global last
  parent = [i for i in range(V + 1)]
  edges.sort(key= lambda x : x[2])
  result = 0
  

  for edge in edges:
    a, b, cost = edge

    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)
      result += cost
      last = cost
  
  return result



import sys


V, E = map(int, sys.stdin.readline().strip().split(' '))

edges = []
for _ in range(E):
  a, b, cost = map(int, sys.stdin.readline().strip().split(' '))
  edges.append((a, b, cost))
last = 0

print(kruskal(edges, V) - last)

"""
하나의 최소 신장 트리를 두 개의 부분으로 나누기 위해서는, 
트리 내의 어떤 간선이든 하나를 제거하면 됩니다. 
이 간선을 제거하면 트리가 두 개의 독립적인 트리, 
즉 두 세트로 나뉩니다.

왜 가장 비용이 큰 도로를 제거하는가?

1.최소 유지 비용: 최소 신장 트리의 목적은 전체 네트워크를 연결하는 데 필요한 최소 비용을 찾는 것입니다. 따라서, 마을을 두 개로 분할할 때도 여전히 각 부분의 유지 비용을 최소로 하려는 목표가 유효합니다. 가장 비용이 큰 도로를 제거함으로써, 남은 두 개의 트리(두 세트의 도시)가 여전히 각각 최소 비용으로 연결되어 있음을 보장할 수 있습니다.

2.분할의 효과: 가장 비용이 큰 간선을 제거하면, 나머지 간선들로만 이루어진 두 부분 트리의 유지 비용은 자연스럽게 최소 신장 트리를 구성할 때보다 작아집니다. 이는 각 부분에 대해 추가로 비용을 줄이는 효과가 있으며, 이는 전체 계획의 목표와 일치합니다.

3. 분할 최적화: 트리에서 어떤 간선을 제거해도 두 개의 부분 트리로 나뉘지만, 가장 비용이 큰 간선을 제거함으로써 전체 유지 비용을 가장 효율적으로 줄일 수 있습니다. 간선을 제거하는 것은 유지 비용을 줄이는 직접적인 방법이며, 가장 큰 비용을 갖는 간선을 제거하는 것이 전체적으로 비용을 최적화하는 방법입니다.

이러한 이유로, 최소 신장 트리에서 가장 비용이 큰 도로를 제거하는 것은 마을을 두 개의 세트로 분할하면서도 각 세트의 유지 비용을 최소화하는 효과적인 전략입니다.
"""