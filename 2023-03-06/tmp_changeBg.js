function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {

    setTimeout(function(){
        let a = random(255);
        let b = random(255);
        let c = random(255);
        let text = 'R:'+String(a)+' G:'+ String(b)+ ' B:'+String(c);
        const rndCol = 'rgb(' + a + ',' +b + ',' + c + ')';
        document.getElementById('demo').innerHTML = text;
        document.body.style.backgroundColor = rndCol;
        bgChange();
    }, 1000)
}

bgChange();
