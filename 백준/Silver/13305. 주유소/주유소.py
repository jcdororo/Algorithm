n = int(input())  # 도시의 개수
distances = list(map(int, input().split()))  # 각 도시 간의 거리
prices = list(map(int, input().split()))  # 각 도시의 리터당 기름 가격

# 첫 번째 도시에서는 무조건 주유
total_cost = distances[0] * prices[0]
min_price = prices[0]

for i in range(1, n - 1):  # 마지막 도시는 이미 도착한 상태이므로 제외
    if prices[i] < min_price:  # 현재 도시의 기름 가격이 이전 도시의 기름 가격보다 싸면
        min_price = prices[i]  # 현재 도시의 기름 가격으로 갱신
    total_cost += min_price * distances[i]  # 최소 기름 가격으로 현재 도시까지 주유

print(total_cost)
