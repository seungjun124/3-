let input = prompt('이름을 입력하세요.');

if (input) { //input에 값이 들어있다면 truthy
    alert(`${input}님 어서오세요.`);
    document.getElementById('name').innerHTML = input;
}
else
{
    alert('이름을 입력하지 않았습니다.');
    document.getElementById('name').innerHTML = "이름을 입력해주세요. (새로고침 F5)";
}