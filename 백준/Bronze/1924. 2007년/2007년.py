x, y = list(map(int, input().split(' ')))

lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

sumDate = 0

for i in range(0, x - 1):
  sumDate += lastDate[i]

sumDate += y

print(days[sumDate % 7])