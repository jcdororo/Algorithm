import sys

N = int(sys.stdin.readline().strip())

grades = list(map(int,sys.stdin.readline().strip().split(' ')))

maxGrade = max(grades)

for i in range(N):
  grades[i] = grades[i] / maxGrade * 100

print(round(sum(grades) / len(grades), 6))