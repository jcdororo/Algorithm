import sys

N = sys.stdin.readline().strip()

files = {}
answer = ''

for _ in range(int(N)):
  __, extension = sys.stdin.readline().strip().split('.')
  if files.get(extension, False):
    files[extension] += 1
  else:
    files[extension] = 1

for ex, cnt in sorted(files.items()):
  print(ex + ' ' + str(cnt))