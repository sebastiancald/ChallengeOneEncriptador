let texto = "";

function filtrarTexto() {
  //Convierte texto a minuscula
  texto = document.querySelector("#texto").value.toLowerCase();
  //elimina las tildes
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Quita símbolos
  texto = texto.replace(/[^a-z ]/g, "");
}
