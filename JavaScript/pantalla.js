const pizarraMensaje = document.querySelector("#mensaje");
const pizarraTitulo = document.querySelector("aside h2");
const pizarraBoton = document.querySelector("aside input");
const pizarraResultado = document.querySelector("#resultado");

function pizarraEvento(tipoDeEvento) {
  if (tipoDeEvento == "borrarContenido") {
    pizarraMensaje.style["display"] = "none";
  } else if (tipoDeEvento == "cambiarTexto") {
    pizarraResultado.textContent = texto;
    pizarraResultado.style["display"] = "unset";
  } else if (tipoDeEvento == "mostrarBoton") {
    pizarraBoton.style["display"] = "unset";
  } else if (tipoDeEvento == "mostrarAlerta") {
    pizarraResultado.style["display"] = "none";
    pizarraMensaje.style["display"] = "unset";
    pizarraTitulo.classList = "blink_me";
    pizarraBoton.style["display"] = "none";
    setTimeout(function () {
      pizarraTitulo.classList.remove("blink_me");
    }, 3000);
  } else {
    alert("Tipo de evento ingresado incorrecto");
  }
}
