import sys


N = int(sys.stdin.readline().strip())

arr = []
grade = [1 for x in range(N)]

for _ in range(N):
    x, y = map(int, sys.stdin.readline().strip().split(' '))
    arr.append([x,y])

for i in range(N):
    for j in range(N):
        if i != j:
            if arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]:
                grade[i] += 1
print(' '.join(map(str,grade)))
