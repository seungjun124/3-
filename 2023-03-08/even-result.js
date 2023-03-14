function a() {
    let userNumber = document.getElementById('demo').value;

    if (userNumber) {
        userNumber = parseInt(userNumber); //null이 아니라면 정수로 변환
        (userNumber % 2 ===0) ? alert(`${userNumber}: 짝수`) : alert(`${userNumber}: 홀수`);
    }
    else
    {
        alert('숫자를 입력해주세요.');
    }
}
