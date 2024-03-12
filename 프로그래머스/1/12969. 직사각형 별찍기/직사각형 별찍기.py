a, b = map(int, input().strip().split(' '))

star = ''

for i in range(b):
    
    star += '*' * a + '\n'

print(star)