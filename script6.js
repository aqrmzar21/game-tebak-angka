// bungkus di while
var lagi = true
while (lagi) {
  
// menangkap pilihan player
var player = prompt('Silahkan pilih untuk bermain')

// menangkap bilangan random
var com = Math.random()
// menangkap pilihan computer
if (com < 0.40 ) {
  com = "gajah"
}
else if ( com > 0.40 && com < 0.70 ) {
  com = "orang"
}
else {
  com = "semut"
}
// console.log(com)
// menentukan rules aturan permainan
let hasil =""
if ( player == com ) {
hasil = "SERI"
}
else if (player == "gajah") {
  // CARA I 
// hasil = (com == "semut") ? 'MENANG' : 'KALAH'

  // CARA II 
  if (com == "semut") {
        hasil =  "MENANG"
  } else {
    hasil = "KALAH"
  }
}
else if (player == "semut") {
  if (com == "orang") {
        hasil = "MENANG"
  } else {
    hasil = "KALAH"
  }
}
else if (player == "orang") {
  if (com == "gajah") {
    hasil = "KALAH"
  } else {
    hasil = "MENANG"
  }
}
else {
  hasil = "Yang anda masukkan SALAH"
}


// tampilkan alert hasil
hasil = alert("kamu PILIH " + player + " dan komputer PILIH " + com + " \n ANDA " + hasil)
var lagi = confirm("Kamu mau main lagi")
}

alert("terimakasih sudah bermain ")