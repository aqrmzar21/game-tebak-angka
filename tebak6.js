  let angkaBenar = Math.floor(Math.random() * 100) + 1;
  let percobaan = 0;
  const maxPercobaan = 3;
  let selesai = false;
  console.log(angkaBenar)

function tebak() {
  if (selesai) return;

  const tebakan = parseInt(document.getElementById("guess").value);
  const pesan = document.getElementById("message");
  const status = document.getElementById("status");
  const suaraError = document.getElementById("suaraError");
  const suaraBenar = document.getElementById("suaraBenar");
  const suaraSalah = document.getElementById("suaraSalah");

  if (isNaN(tebakan)) {
    pesan.textContent = "❗ Masukkan angka yang valid!";
    return;
  }

  percobaan++;

  if (tebakan < angkaBenar) {
    pesan.textContent = "⬇️ Terlalu rendah! Coba lagi.";
    suaraSalah.play();
  } else if (tebakan > angkaBenar) {
    pesan.textContent = "⬆️ Terlalu tinggi! Coba lagi.";
    suaraSalah.play();
  } else {
    pesan.textContent = `🎉 Selamat! Jawabanmu benar (${angkaBenar})!`;
    suaraBenar.play();
    selesai = true;
    status.textContent = `Skor: ${maxPercobaan - percobaan + 1} / ${maxPercobaan}`;
    document.getElementById("resetBtn").style.display = "inline-block";
    return;
  }
  
  if (percobaan >= maxPercobaan) {
    pesan.textContent = `😞 Kamu sudah mencoba ${maxPercobaan} kali. Jawaban yang benar adalah ${angkaBenar}.`;
    suaraError.play();
    selesai = true;
    document.getElementById("resetBtn").style.display = "inline-block";
  }

  status.textContent = `Percobaan: ${percobaan} / ${maxPercobaan}`;
}
function resetGame() {
  angkaBenar = Math.floor(Math.random() * 100) + 1;
  percobaan = 0;
  selesai = false;

  // Kosongkan input, pesan, status
  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("status").textContent = "";

  // Sembunyikan tombol reset lagi
  document.getElementById("resetBtn").style.display = "none";

  console.log("Game direset. Angka baru:", angkaBenar);
}