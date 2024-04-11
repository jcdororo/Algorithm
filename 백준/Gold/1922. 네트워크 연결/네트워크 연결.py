def findRoot(parent, x):                # 내 노드의 루트 노드가 무엇인지 타고타고타고 찾는다.
                                        # 내 노드의 루트 노드를를 이미 찾았더라면 이 로직은 타지 않는다.
  if parent[x] != x:                    # 이 로직을 탔다는 의미는 노드의 루트를 못찾았다는 뜻 !
    parent[x] = findRoot(parent, parent[x]) 
  return parent[x]                      

def union(parent, a, b):                # 두개의 노드의 각각의 부모를 갱신한다.
  a = findRoot(parent, a)
  b = findRoot(parent, b)

  if a < b:
    parent[b] = a
  else:
    parent[a] = b

def kruskal(edges, V):
  parent = [i for i in range(V + 1)]    # 노드의 루트 노드를 저장해놓는 변수
  edges.sort(key= lambda x : x[2])      # 튜플들을 가중치를 기준으로 오름차순 정렬을 해놓는다.
  result = 0                            # 최소 가중치를 저장할 변수

  for edge in edges:                    # 각 튜플별로 순회를 시작한다.
    a, b, cost = edge
                                        # findRoot 함수로 나온 결과가 서로 다르다면 루트 노드가 다르다는 뜻이므로
                                        # 사이클을 형성하지 않는다 !
    if findRoot(parent, a) != findRoot(parent, b):
      union(parent, a, b)               # 루트 노드가 다르다면 두 튜플을 합친다.
      result += cost                    # 사이클이돌지 않는다면 가중치를 더한다.

  return result

import sys


V = int(sys.stdin.readline().strip())    # 노드와 간선을 입력받는다.
E = int(sys.stdin.readline().strip())    # 노드와 간선을 입력받는다.

edges = []                                          
for _ in range(E):                                          # 노드와 노드사이 그리고 가중치를 튜플 형태로 모아둔다.
  a, b, cost = map(int, sys.stdin.readline().strip().split(' '))
  edges.append((a, b, cost))

print(kruskal(edges, V))                                    # 모아둔 튜플과 노드의 갯수를 매개변수로 입력하여
                                                            # 크루스칼 알고리즘 시작