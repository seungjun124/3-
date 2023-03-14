function a() {
    let Num = document.getElementById('demo').value;

    document.getElementById('demo').innerHTML = Num;
    if (Num) {
        if (Num % 3 === 0) {
            alert('3의 배수 입니다.');
        }
        else
        {
            alert('3의 배수가 아닙니다.');
        }
    }
    else
    {
        alert('숫자를 입력해주세요.');
    }
}