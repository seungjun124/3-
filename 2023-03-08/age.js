var currentYear = new Date().getFullYear();
let birthYear;
let age;

birthYear = parseInt(prompt('태어난 연도를 입력하세요. (YYYY)', ''));
age = currentYear - birthYear + 1;
if (age < 20) {
    alert('성인이 아닙니다.');
    alert(`${currentYear}년, 현재 ${age}세 입니다.`)
} 
else if (age > 20)
{
    alert('성인 입니다.');
    alert(`${currentYear}년, 현재 ${age}세 입니다.`)
}
else 
{
    alert('나이를 입력해주세요.');
}

document.getElementById('demo').innerHTML = `현재 날짜: ${currentYear}년 ${age}살`