const title = document.querySelector('h1');
const userName = document.querySelector('#desc p');
const img = document.querySelector('#profile img');

title.onclick = () => title.innerText = '프로필';
userName.onclick = () => userName.innerHTML = '이름: <b>민들레</b>';
img.onclick = () => img.src = 'images/pf2.png';