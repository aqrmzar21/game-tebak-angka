<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Batu Gunting Kertas</title>
  <link rel="stylesheet" href="latihan6.css" />
</head>

<body>
  <div class="container">
    <h1>Ayo Suit</h1>

    <div class="box">
      <label>
        <input type="radio" name="pilihan" value="batu" />
        🪨 Batu
      </label>
      <label>
        <input type="radio" name="pilihan" value="gunting" />
        ✂️ Gunting
      </label>
      <label>
        <input type="radio" name="pilihan" value="kertas" />
        📄 Kertas
      </label>
      <button onclick="pilih()">OK</button>
    </div>

    <p id="output"></p>
  </div>

  <script src="latihan6.js">
    // function pilih() {
    //   const pilihan = document.querySelector('input[name="pilihan"]:checked');
    //   document.getElementById("output").textContent =
    //     pilihan ? `Kamu memilih: ${pilihan.value}` : "Silakan pilih salah satu!";
    // }
  </script>
</body>

</html>