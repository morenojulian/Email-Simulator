// variables
const botonEnviar = document.querySelector("#enviar");
const botonReset = document.querySelector("#resetBtn");
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

  botonReset.addEventListener("click", resetearForm);

  formulario.addEventListener("submit", enviarEmail);
}

// funciones
function iniciarApp() {
  botonEnviar.disabled = true;
  botonEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    // elimina los errores.
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    const er =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("El email no es valido");
    }
  }

  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    botonEnviar.disabled = false;
    botonEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
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
// envia el email
function enviarEmail(e) {
  e.preventDefault();
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // ocultamos el spinner
  setTimeout(() => {
    spinner.style.display = "none";

    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envió correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase"
    );
    formulario.insertBefore(parrafo, spinner);

    setTimeout(() => {
      parrafo.remove();
      resetearForm();
    }, 5000);
  }, 3000);
}

//Formateando el formulario

function resetearForm() {
  formulario.reset();
  iniciarApp();
}
