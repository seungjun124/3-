var arr = [];

a = () => {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
 
    for (let i = 1; i <= Math.max(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            arr.push(i);
        }   
    }
    document.getElementById('result').innerHTML = arr[arr.length-1];
}