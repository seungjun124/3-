function doSum() {
    let a = document.getElementById('valueA').value;
    let b = document.getElementById('valueB').value;

    document.getElementById('valueA').innerHTML = a;
    document.getElementById('valueB').innerHTML = b;
    document.getElementById('valueC').innerHTML = Number(a) + Number(b);
}