let text = parseInt(prompt('숫자를 입력하세요.'));
let text2 = parseInt(prompt('숫자를 입력하세요.'));

for (let i = 2; i <= Math.min(text, text2); i++) {
    if (text % 2 == 0 && text2 % 2 == 0) {
        alert(i);
        break;
    } else {
        alert("1");
        break;
    }
}