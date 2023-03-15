var [text, text2] = prompt("두 숫자를 입력하세요. 예시)100 200").split(" ")
let arr = [];
let arr2 = [];
let arr3 = [];

for (let i = 1; i <= Math.max(text, text2); i++) {
    if (text % i === 0) {
        arr.push(i);
    }

    if (text2 % i === 0) {
        arr2.push(i);
    }

    if (text % i === 0 && text2 % i === 0) {
        arr3.push(i);
    }
}

document.write(`${text}모든 요인: ${arr}<br>${text2}모든 요인: ${arr2}<br>최대 공약수는 다음과 같습니다.${arr3[arr3.length-1]}`)
