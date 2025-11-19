"use strict";
import { nacimiento, usuario, contrasena } from "./expReg.js";
import { validarCapcha } from "./recachap.js";

let form,
  nombre,
  fnac,
  usu,
  radios,
  pass,
  list,
  rpass,
  visores,
  gcheck,
  enviar,
  resetear,
  envios,
  valido,
  aEnvios;

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    establecerObjetos();
    establecerEventos();
  });
};

const establecerObjetos = () => {
  form = document.querySelector("#registro");
  nombre = document.querySelector("#nombre");
  fnac = document.querySelector("#nacimiento");
  usu = document.querySelector("#usuario");
  radios = document.querySelectorAll(".radios");
  pass = document.querySelector("#pass");
  rpass = document.querySelector("#rpass");
  list = document.querySelector("#listReq");
  visores = document.querySelectorAll(".visor");
  gcheck = document.querySelectorAll(".check");
  enviar = document.querySelector("#enviar");
  resetear = document.querySelector("#reestablecer");
  envios = document.querySelector("#nintentos");
};

const establecerEventos = () => {
  nombre.addEventListener("blur", validarNombre);
  fnac.addEventListener("input", validarFecNac);
  usu.addEventListener("input", validarUsu);

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      validarRadios();
      habilitarSubmit();
    });
  });

  pass.addEventListener("input", validarPass);
  rpass.addEventListener("input", validarRPass);
  pass.addEventListener("focus", listRequi);

  visores.forEach((visor) => {
    visor.addEventListener("click", verContra);
  });

  gcheck.forEach((check) => {
    check.addEventListener("click", () => {
      validarJornadas();
      habilitarSubmit();
    });
  });

  form.addEventListener("submit", validForm);
  resetear.addEventListener("click", resetForm);
  habilitarSubmit();
};

// ------------------ funciones

const validarNombre = () => {
  if (nombre.validity.valueMissing) {
    document.querySelector("#errnombre").textContent = "El campo es requerido";
  }
  nombre.value = nombre.value.toUpperCase();
  habilitarSubmit();
};

const validarFecNac = () => {
  const errfec = document.querySelector("#errfecha");

  if (fnac.validity.valueMissing) {
    errfec.textContent = "El campo es requerido";
  } else if (!nacimiento.test(fnac.value)) {
    errfec.textContent = "Debe estar entre 1957 y 2006";
  } else {
    errfec.textContent = "";
  }

  habilitarSubmit();
};

const validarUsu = () => {
  const errUsu = document.querySelector("#errusuario");

  if (usu.validity.valueMissing) {
    errUsu.textContent = "El campo es requerido";
  } else if (!usuario.test(usu.value)) {
    errUsu.textContent = "Debe empezar con # y tener 5-15 letras";
  } else {
    errUsu.textContent = "";
  }

  habilitarSubmit();
};

const validarRadios = () => {
  const seleccionado = [...radios].some((radio) => radio.checked);
  const errorTipo = document.querySelector("#errortipo");
  errorTipo.textContent = seleccionado ? "" : "Seleccione una opción";

  return seleccionado;
};

const listRequi = () => {
  list.style.display = "block";
  list.innerHTML = `
        <span id="longitud"></span><br>
        <span id="mayus"></span><br>
        <span id="minus"></span><br>
        <span id="numero"></span><br>
        <span id="especial"></span><br>
        <span id="espacio"></span>`;
};

const validarPass = () => {
  const errPass = document.querySelector("#errPass");
  const val = pass.value;

  // Longitud
  document.querySelector("#longitud").textContent = contrasena.longitud.test(val)
    ? ""
    : "Debe tener entre 8 y 15 caracteres";

  // Mayúscula
  document.querySelector("#mayus").textContent = contrasena.mayus.test(val)
    ? ""
    : "Debe tener al menos una letra mayúscula";

  // Minúscula
  document.querySelector("#minus").textContent = contrasena.minus.test(val)
    ? ""
    : "Debe tener al menos una letra minúscula";

  // Número
  document.querySelector("#numero").textContent = contrasena.numero.test(val)
    ? ""
    : "Debe tener al menos un número";

  // Especial
  document.querySelector("#especial").textContent = contrasena.especial.test(val)
    ? ""
    : "Debe tener al menos un carácter especial";

  // Espacios
  document.querySelector("#espacio").textContent = contrasena.espacio.test(val)
    ? ""
    : "No debe contener espacios";

  errPass.textContent = val === "" ? "El campo es requerido" : "";

  habilitarSubmit();
};

const validarRPass = () => {
  const errRPass = document.querySelector("#errRPass");

  if (rpass.validity.valueMissing) {
    errRPass.textContent = "Campo requerido";
  } else if (pass.value !== rpass.value) {
    errRPass.textContent = "Las contraseñas no son iguales";
  } else {
    errRPass.textContent = "";
  }

  habilitarSubmit();
};

const verContra = () => {
  pass.type = pass.type === "password" ? "text" : "password";
  rpass.type = rpass.type === "password" ? "text" : "password";
};

const validarJornadas = () => {
  const seleccionados = [...gcheck].filter(ch => ch.checked).length;
  const errorchecks = document.querySelector("#errortipocheck");

  if (seleccionados < 1 || seleccionados > 3) {
    errorchecks.textContent = "Selecciona entre 1 y 3 opciones.";
    return false;
  }

  errorchecks.textContent = "";
  return true;
};

const validForm = async (e) => {
  e.preventDefault();

  if (!valido) return;

  const spinner = document.querySelector("#spinner");
  const exito = document.querySelector("#exito");
  const captcha = document.querySelector("#captcha");

  try {
    captcha.value = await validarCapcha();
    confirmarEnvio(spinner, exito, e.target);
    intentos();
  } catch (error) {
    exito.textContent = error;
  }
};

const confirmarEnvio = (spinner, exito, objeto) => {
  Swal.fire({
    title: "Formulario IV",
    html: "¿Desea <strong>enviar</strong> los datos del formulario?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Enviar",
    cancelButtonText: "No enviar",
  }).then((result) => {
    if (result.isConfirmed) {
      const datos = new FormData(objeto);
      console.log(
        `Datos enviados: ${JSON.stringify(Object.fromEntries(datos))}`
      );

      spinner.style.display = "block";
      exito.textContent = "Datos enviados";
    }
  });
};

const habilitarSubmit = () => {
  valido =
    form.checkValidity() &&
    validarRadios() &&
    validarJornadas();

  enviar.disabled = !valido;
};

const resetForm = () => {
  form.reset();
};

const intentos = () => {
  aEnvios = JSON.parse(localStorage.getItem("nintentos")) || [];
  return (aEnvios.length + 1);
};

init();
