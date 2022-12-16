    function hitungRataRataUN() {
    const bahasaIndonesia = parseInt(prompt ("Masukkan nilai Bahasa Indonesia"));
    const bahasaInggris = parseInt(prompt ("Masukkan nilai Bahasa Inggris"));
    const matematika = parseInt(prompt("Masukkan nilai Matematika"));
    const IPA = parseInt(prompt("Masukkan nilai IPA"));
    
    //validasi input
    if (isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(matematika) || isNaN(IPA)) {
    alert("Mohon masukkan nilai yang valid");
    return;
    }
    
    var rataRata = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4;
    var grade;
    
    //determining grade
    if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
    } else if (rataRata >= 80 && rataRata <= 89) {
    grade = "B";
    } else if (rataRata >= 70 && rataRata <= 79) {
    grade = "C";
    } else if (rataRata >= 60 && rataRata <= 69) {
    grade = "D";
    } else {
    grade = "E";
    }
    
    alert("Rata-rata nilai UN anda adalah " + rataRata + " dengan grade " + grade);
    }
    
    hitungRataRataUN();