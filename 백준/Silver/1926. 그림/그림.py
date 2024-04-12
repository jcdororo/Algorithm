import sys
sys.setrecursionlimit(10**6)

def dfs(x, y):
    # 방문한 지점을 0으로 바꾸어 다시 방문하지 않도록 함
    grid[x][y] = 0
    # 현재 그룹의 크기를 1로 시작 (현재 지점 포함)
    area = 1
    # 상하좌우 네 방향 탐색
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 1:
            area += dfs(nx, ny)
    return area

# 입력 받기
n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

num_of_paintings = 0
max_area = 0

# 모든 칸에 대해 그림이 있는지, 그리고 방문하지 않았는지 확인
for i in range(n):
    for j in range(m):
        if grid[i][j] == 1:
            # 새로운 그림을 찾으면 그림의 수 증가
            num_of_paintings += 1
            # 해당 그림의 크기를 계산
            max_area = max(max_area, dfs(i, j))

# 그림이 없는 경우
if num_of_paintings == 0:
    print(0)
    print(0)
else:
    print(num_of_paintings)
    print(max_area)
