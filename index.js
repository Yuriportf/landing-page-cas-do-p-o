function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
      alert("Copiado: " + texto);
    });
  }