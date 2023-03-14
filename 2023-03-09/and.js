const num1 = parseInt(prompt('첫번째 양의 정수 : '));
const num2 = parseInt(prompt('두번째 양의 정수 : '));
let str;

const text = document.getElementById("demo");

//AND 연산, 둘다 true여야 결괏값 true
if (num1 % 2 ===0 && num2 % 2 ===0) {
    str = "두 수 모두 짝수입니다";
} else if(num1 % 2 ===1) {
    str = "첫번째 양의 정수가 홀수입니다.";
} else if(num2 % 2 ===1) {
    str = "두번째 양의 정수가 홀수입니다.";
} else {
    str = "두 양의 정수 모두 홀수입니다."
}
text.innerHTML = '첫번째 양의 정수: '+ num1 + ', 두번째 양의 정수: '+ num2
alert(str)