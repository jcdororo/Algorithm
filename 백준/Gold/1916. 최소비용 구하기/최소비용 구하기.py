"""
"""
import sys
from heapq import *

N = int(sys.stdin.readline().strip())
M = int(sys.stdin.readline().strip())

# print(N, M)

graph = [[] for _ in range(N + 1)]

for _ in range(M):
  a, b, cost = map(int, sys.stdin.readline().split(' '))
  graph[a].append((b, cost))

# print(graph)

start, end = map(int, sys.stdin.readline().split(' '))

# print(start, end)

def dijkstra(start):
  distances = [float('inf')] * (N + 1)
  queue = []

  heappush(queue, (0, start))

  while queue:
    current_distance, current_node = heappop(queue)

    if current_distance > distances[current_node]:
      continue

    for adjacent, weight in graph[current_node]:
      distance = current_distance + weight

      if distance < distances[adjacent]:
        distances[adjacent] = distance
        heappush(queue, (distance, adjacent))


  return distances


distances = dijkstra(start)
print(distances[end])