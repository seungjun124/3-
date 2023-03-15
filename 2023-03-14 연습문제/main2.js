let text = parseInt(prompt('숫자를 입력하세요.'));
let text2 = parseInt(prompt('숫자를 입력하세요.'));
let arr = [];
let arr2 = [];
let arr3 = [];
let sum = -1;
let sum2 = -1;
let sum3 = -1;

for (let i = 1; i <= Math.max(text, text2); i++) {
    if (text % i === 0) {
        sum++;
        arr.push(i);
    }

    if (text2 % i === 0) {
        sum2++;
        arr2.push(i);
    }

    if (text % i === 0 && text2 % i === 0) {
        sum3++;
        arr3.push(i);
    }
}

document.write(`${text}모든 요인: ${arr}<br>${text2}모든 요인: ${arr2}<br>최대 공약수는 다음과 같습니다.${arr3[sum3]}`)