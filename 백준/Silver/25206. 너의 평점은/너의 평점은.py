import sys


table = {}
table['A+'] = 4.5
table['A0'] = 4.0
table['B+'] = 3.5
table['B0'] = 3.0
table['C+'] = 2.5
table['C0'] = 2.0
table['D+'] = 1.5
table['D0'] = 1.0
table['F'] = 0.0

# (학점 * 과목평점) / 학점의 총합

sumNumber = 0       # 학점의 총합
sumGrade = 0        # 학점 * 과목평점

for _ in range(20):
  g, num, grade = sys.stdin.readline().strip().split()
  if grade != 'P':
    sumNumber += float(num)
    sumGrade += float(num) * float(table.get(grade))
  
if sumNumber != 0 and sumGrade != 0:
    print(round(sumGrade / sumNumber, 6))
else:
    print('0.000000')
  


