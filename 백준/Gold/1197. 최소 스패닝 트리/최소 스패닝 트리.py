def find(parent, x):
    # 노드의 루트를 찾는 함수
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, a, b):
    # 두 서브트리를 합치는 함수
    a = find(parent, a)
    b = find(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

def kruskal(vertex_count, edges):
    # 크루스칼 알고리즘 주 함수
    parent = [i for i in range(vertex_count + 1)]  # 부모 테이블 초기화
    edges.sort(key=lambda x: x[2])  # 간선을 비용순으로 정렬
    
    result = 0  # 최소 비용 저장 변수
    for edge in edges:
        a, b, cost = edge
        # 사이클이 발생하지 않는 경우
        if find(parent, a) != find(parent, b):
            union(parent, a, b)  # 집합 합치기
            result += cost  # 비용 더하기
            
    return result

# 입력 받기
V, E = map(int, input().split())  # 정점의 개수 V, 간선의 개수 E
edges = []  # 간선 정보를 담을 리스트

for _ in range(E):
    a, b, cost = map(int, input().split())  # 간선의 두 정점과 비용
    edges.append((a, b, cost))

# 크루스칼 알고리즘을 사용한 최소 스패닝 트리의 비용 계산
print(kruskal(V, edges))
