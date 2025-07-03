// --------------------------------------------------------------------------------------
// OPSI 1
// --------------------------------------------------------------------------------------
  function pilih() {
    const pilihanUser = document.querySelector('input[name="pilihan"]:checked');

    if (!pilihanUser) {
      document.getElementById("output").textContent = "Silakan pilih salah satu!";
      return;
    }

    const pilihan = pilihanUser.value;
    const pilihanKomputer = getPilihanKomputer();

    let hasil = "";

    if (pilihan === pilihanKomputer) {
      hasil = "Seri!";
    } else if (
      (pilihan === "batu" && pilihanKomputer === "gunting") ||
      (pilihan === "gunting" && pilihanKomputer === "kertas") ||
      (pilihan === "kertas" && pilihanKomputer === "batu")
    ) {
      hasil = "Kamu menang!";
    } else {
      hasil = "Komputer menang!";
    }

    document.getElementById("output").textContent = 
      `Kamu memilih: ${pilihan} | Komputer memilih: ${pilihanKomputer} → ${hasil}`;
  }

  function getPilihanKomputer() {
    const opsi = ["batu", "gunting", "kertas"];
    const acak = Math.floor(Math.random() * opsi.length);
    return opsi[acak];
  }


  // --------------------------------------------------------------------------------------
  // OPSI 2
  // --------------------------------------------------------------------------------------
  function pilih() {
    const pilihanUser = document.querySelector('input[name="pilihan"]:checked');

    if (!pilihanUser) {
      alert("Silakan pilih salah satu!");
      return;
    }

    const pilihan = pilihanUser.value;
    const pilihanKomputer = getPilihanKomputer();

    let hasil = "";

    if (pilihan === pilihanKomputer) {
      hasil = "Seri!";
    } else if (
      (pilihan === "batu" && pilihanKomputer === "gunting") ||
      (pilihan === "gunting" && pilihanKomputer === "kertas") ||
      (pilihan === "kertas" && pilihanKomputer === "batu")
    ) {
      hasil = "Kamu menang!";
    } else {
      hasil = "Komputer menang!";
    }

    alert(`Kamu memilih: ${pilihan}\nKomputer memilih: ${pilihanKomputer}\n→ ${hasil}`);
  }

  function getPilihanKomputer() {
    const opsi = ["batu", "gunting", "kertas"];
    const acak = Math.floor(Math.random() * opsi.length);
    return opsi[acak];
  }