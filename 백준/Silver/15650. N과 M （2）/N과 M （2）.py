import sys
from itertools import combinations

N, M = map(int,sys.stdin.readline().strip().split(' '))
arr = [x for x in range(1, N + 1)]

orders = combinations(arr, M)

for order in orders:
  print(" ".join(map(str, [x for x in order])))

