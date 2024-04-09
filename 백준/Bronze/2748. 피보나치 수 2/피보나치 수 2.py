import sys


N = int(sys.stdin.readline().strip())

dp = [0] * (N + 3)
dp[0] = 0
dp[1] = 1

for i in range(3, N + 3):
  dp[i] = dp[i - 1] + dp[i - 2]

print(dp[-1])






