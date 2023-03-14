function calcSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let num = parseInt(prompt('몇까지 더할까요?'));
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`)

// function multiple(a, b = 5, c = 10) {
//     return a * b + c;
// }

// multiple(5,10,20);
// multiple(10, 20);
// multiple(10);