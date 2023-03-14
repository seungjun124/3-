for (let j = 2; j <= 9; j++) {
    document.write('<div>');
    document.write(`<h1>${j}단</h1>`);

    for (let i = 1; i < 10; i++) {
        document.write(`<p>${j}  *  ${i}  =  ${j*i}</p>`); 
    }
    document.write('</div>');
    
}