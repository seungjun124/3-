user = prompt('이름을 입력하세요.');

alert(user+'님 안녕하세요.');

result = 10;

userNumber = prompt('10보다 작은 수 입력');

result = result + userNumber;

let test = '000001';
parseInt(test); //1
Number(test); //1

let test2 = '2023년도';
parseInt(test2); //2023
Number(test2); //NaN

let test3 = '제1회';
parseInt(test3); //NaN
Number(test3); //NaN

let test4 = '10.12345';
Number(test4); //10.12345
parseInt(test4); //10
parseFloat(test4); //10.12345
//parseint()는 문자열로 된 부분에서 정수만 뽑아서 변환 해준다.
//Number()는 문자열 전체가 숫자일떄 소수점까지 숫자타입으로 변환 해준다.

3 > 4; //false

3 == "3"; //true

3 != "3"; //false

3 === "3"; //false 
// === 3개는 자료형까지 비교

3 !== "3"; //true

"A" > "B"; //false
//아스키 코드로 변환 A = 0x41, B = 0x42

"A" > "a"; //true

"Javascript" < "JavaScript"; //false

