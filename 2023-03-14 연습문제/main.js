let text = parseInt(prompt('숫자를 입력하세요.'));

if (text > 0) {
    alert('양수입니다.')
} else if (text < 0) {
    alert('음수입니다.')
} else if (text == 0) {
    alert('0 입니다.')
} else {
    alert('숫자를 입력하세요.')
}