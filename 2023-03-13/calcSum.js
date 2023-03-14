function calcSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    document.write(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
}

calcSum(100);