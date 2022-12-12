// segitiga siku 2
function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '5 ';
          
        }
        hasil += '\n';
        
    }
    return hasil;
}
console.log(segitiga2(8));
