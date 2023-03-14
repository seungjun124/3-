let sum = function(a,b) {
    return a+b;
}
console.log(`함수 실행 결과: ${sum(10,20)}`);

(function(a,b) {
    let sum = a+b;
    console.log(`함수 실행 결과: ${sum}`);
})(100,200); //300

let hi = function() {
    return '안녕하세요?';
}
hi(); //안녕하세요?

let hi2 = () => {retrun `안녕하세요?`;} //안녕하세요?

let hi3 = () => '안녕하세요?'; //안녕하세요?

let hi4 = function(user) {
    console.log(`${user}님, 안녕하세요.`);
}
hi4("홍길동"); //홍길동님, 안녕하세요.

let hi5 = user => console.log(`${user}님, 안녕하세요.`); //홍길동님, 안녕하세요.

let sum2 = function(a,b){
    return a+b;
}
sum2(10,20); //30

let sum3 = (a,b) => console.log(`${a}+${b}=${a+b}`);
sum3(10,20); //30