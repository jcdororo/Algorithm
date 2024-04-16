"""
"""
import sys
from heapq import *


T = int(sys.stdin.readline().strip())

def dijkstra(c):
  distances = [float('inf')] * (n + 1)

  queue = []
  distances[c] = 0
  heappush(queue,(0, c))
  last = 0

  while queue:
    current_distance, current_node = heappop(queue)

    if current_distance > distances[current_node]:
      continue

    for adjacent, weight in graph[current_node]:
      distance = weight + current_distance
        
      if distance < distances[adjacent]:
        distances[adjacent] = distance
        heappush(queue,(distance, adjacent))
        last = adjacent
  print(len([x for x in distances if x != float('inf')]), end=' ') 
  print(max([x for x in distances if x != float('inf')]))

  return distances


for _ in range(T):
  n, d, c = map(int, sys.stdin.readline().strip().split(' '))

  graph = [[] for _ in range(n + 1)]

  for i in range(d):
    a, b, cost = map(int, sys.stdin.readline().strip().split(' '))

    graph[b].append((a, cost))

  distances = dijkstra(c)


