function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
      alert("Copiado: " + texto);
    });
  }

  function toggleDoacoes() {
    const secao = document.getElementById("secaoDoacoes");
    secao.style.display = secao.style.display === "none" ? "block" : "none";
  }

  const frases = [
    "Onde há partilha, há esperança.",
    "Servir com dignidade é acolher com amor.",
    "Juntos, transformamos vidas.",
    "Alimente o corpo. Fortaleça o espírito.",
    "Pequenos gestos, grandes milagres."
  ];

  let index = 0;
  const fraseElemento = document.getElementById("fraseRotativa");

  setInterval(() => {
    index = (index + 1) % frases.length;
    fraseElemento.textContent = frases[index];
  }, 5000);