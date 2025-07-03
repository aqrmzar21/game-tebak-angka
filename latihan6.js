function pilih() {
    let lagi = true
    while (lagi) {

  const player = document.querySelector('input[name="pilihan"]:checked');

  if (!player) {
    alert("Silakan pilih salah satu!");
    return;
  }
  const pilihan = player.value;
  // console.log(pilihan);
  
  let pilihanKomputer = Math.random();
  if (pilihanKomputer < 0.40) {
    pilihanKomputer = "batu"
  } else if (pilihanKomputer > 0.40 && pilihanKomputer < 0.70) {
    pilihanKomputer = "gunting"
  } else {
    pilihanKomputer = "kertas"
  }
  console.log(pilihanKomputer);
  
  let hasil = ""
  if (pilihan == pilihanKomputer) {
    hasil = "SERI"
  } else if (pilihan == "batu") {
    hasil = (pilihanKomputer == "gunting") ? 'MENANG' : 'KALAH'
  } else if (pilihan == "kertas") {
    hasil = (pilihanKomputer == "gunting") ? 'KALAH' : 'MENANG'
  } else if (pilihan == "gunting") {
    hasil = (pilihanKomputer == "batu") ? 'KALAH' : 'MENANG'
  }

  alert("Kamu " + hasil)
  lagi = confirm("Kamu mau main lagi")

}
alert("terimakasih sudah bermain ")

}