function sum(a,b) {
    var result = a+b;
}
console.log(result); //오류

var text = "hello";
function a() {
    console.log(text);
}
a(); //hello

function greeting() {
    hi = 'hello';
}
greeting();
console.log(hi); //hello

var x = 10;
var y = 20;
var sum = x+y;
console.log(`x=${x} y=${y} x+y=${sum}`);