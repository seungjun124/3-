let text = parseInt(prompt('1보다 큰 숫자를 입력하세요.: '));
let sum = 0;

for (let i = 1; i <= text; i++) {
    if (i % 2 ===0) {
        sum += i;
        document.write(`${i}*****${sum}<br>`);
    }
}