function solution(num_list) {
    var answer = 0;
    const 곱 = num_list.reduce((acc, cur) => acc * cur, 1)
    const 합 = num_list.reduce((acc, cur) => acc + cur, 0)
    console.log(곱,합)
    return 곱 < (합*합) ? 1 : 0;
}