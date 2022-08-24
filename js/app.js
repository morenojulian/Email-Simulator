// variables
const botonEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);
  // eventos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
}

// funciones
function iniciarApp() {
  botonEnviar.disabled = true;
  botonEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    console.log("hay algo");
  } else {
    e.target.classList.add("border", "border-red-500");
    mostrarError();
  }
}

function mostrarError() {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = "Los campos son obligatorios";
  mensajeError.classList.add(
    "border",
    "mb-5",
    "text-center",
    "border-red-700",
    "bg-red-600",
    "text-white",
    "p-3",
    "error"
  );
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.insertBefore(
      mensajeError,
      document.querySelector(".flex", ".justify-between")
    );
  }
}
