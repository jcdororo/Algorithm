import sys


T = int(sys.stdin.readline().strip())


for _ in range(T):
  k = int(sys.stdin.readline().strip())
  n = int(sys.stdin.readline().strip())

  dp = [[0] * 15 for x in range(15)]

  for i in range(15):
    for j in range(15):
      if j == 0:
        dp[i][j] = 1
      if i == 0:
        dp[i][j] = j + 1
      else:
        dp[i][j] = (dp[i][j-1] + dp[i-1][j])

  # for v in dp:
  #   print(v)
  print(dp[k][n-1])




