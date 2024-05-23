import sys


natural_num = set(range(1,10001))
constructor = set()

for i in range(1, 10000):
    for j in str(i):
        i += int(j)

    constructor.add(i)

# print(sorted(natural_num - constructor))

for v in sorted(natural_num - constructor):
    print(v)





    