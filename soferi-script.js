document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    dataOra: new Date().toLocaleString(),
    numarMasina: document.getElementById("numarMasina").value,
    kilometri: document.getElementById("kilometri").value,
    exterior: document.getElementById("exterior").checked ? "DA" : "NU",
    interior: document.getElementById("interior").checked ? "DA" : "NU",
    anvelope: document.getElementById("anvelope").value,
    lumini: document.getElementById("lumini").checked ? "DA" : "NU",
    talon: document.getElementById("talon").checked ? "DA" : "NU",
    asigurare: document.getElementById("asigurare").checked ? "DA" : "NU",
    certificat: document.getElementById("certificat").checked ? "DA" : "NU",
    trusa: document.getElementById("trusa").checked ? "DA" : "NU",
    triunghi: document.getElementById("triunghi").checked ? "DA" : "NU",
    stingator: document.getElementById("stingator").checked ? "DA" : "NU",
    cric: document.getElementById("cric").checked ? "DA" : "NU",
    defectiuni: document.getElementById("defectiuni").value,
  };

  const url = "URL-ul_tău_Google_Apps_Script"; // <--- modifică aici

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    alert("Salvat cu succes!");
    document.getElementById("form").reset();
  } catch (err) {
    console.error(err);
    alert("Eroare la salvare.");
  }
});
