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
    radio.addEventListener("change", (e) => {
      validarRadios(e);
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
    check.addEventListener("click", validarJornadas);
    habilitarSubmit();
  });
  enviar.addEventListener("submit", validForm);
  resetear.addEventListener("click", resetForm);
  habilitarSubmit();
};
// ------------------ funciones

const validarNombre = () => {
  if (nombre.validity.valueMissing) {
    document.querySelector("#errnombre").textContent = "El campo es requerido";
  }
  nombre.value = `${nombre.value.toLocaleUpperCase()}`;
};
const validarFecNac = () => {
  const errfec = document.querySelector("#errfecha");
  if (fnac.validity.valueMissing) {
    errfec.textContent = "El campo es requerido";
  } else if (!nacimiento.test(fnac.value)) {
    errfec.textContent = "Debe estar entre 1957 y 2006";
  } else if (fnac.validity.valid) {
    errfec.textContent = "";
  }
};
const validarUsu = () => {
  const errUsu = document.querySelector("#errusuario");
  if (usu.validity.valueMissing) {
    errUsu.textContent = "El campo es requerido";
  } else if (!usuario.test(usu.value)) {
    errUsu.textContent = "Debe empezar con # y tener 5-15 letras";
  } else if (usu.validity.valid) {
    errUsu.textContent = "";
  }
};
const validarRadios = (e) => {
  //verificar si dentro del grupo de radios hay alguno que está chequeado
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
const validarPass = (e) => {
  const errPass = document.querySelector("#errPass");
  const val = pass.value;
  // Longitud
  document.querySelector("#longitud").textContent = contrasena.longitud.test(
    val
  )
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
  document.querySelector("#especial").textContent = contrasena.especial.test(
    val
  )
    ? ""
    : "Debe tener al menos un carácter especial (!@#~$%€&¬()=?¿¡<>çÇ{})";

  // Espacios
  document.querySelector("#espacio").textContent = contrasena.espacio.test(val)
    ? ""
    : "No debe contener espacios";

  // Mensaje general
  errPass.textContent = val === "" ? "El campo es requerido" : "";
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
};
const verContra = () => {
  const pass = document.form.password;
  const rpass = document.form.repite;

  pass.type = pass.type === "password" ? "text" : "password";
  rpass.type = rpass.type === "password" ? "text" : "password";
};
const validarJornadas = () => {
  const seleccionados = [];
  gcheck.forEach((ch) => {
    if (ch.checked) seleccionados.push(ch.value);
  });
  const errorchecks = document.querySelector("#errortipocheck");

  if (seleccionados.length < 1 || seleccionados.length > 3) {
    errorchecks.textContent = "Selecciona entre 1 y 3 opciones.";
    return false;
  }

  errorchecks.textContent = "";
  return true;
};
const validForm = async (e) => {
  e.preventDefault(); // Evita envío del formulario
  enviar.disabled = !valido;
  const spinner = document.querySelector("#spinner");
  const exito = document.querySelector("#exito");
  const captcha = document.querySelector("#captcha");

  try {
    captcha.value = await validarCapcha();
    confirmarEnvio(spinner, exito, e.target);
    intentos();
  } catch (error) {
    exito.textContent = error;
  } finally {
    // Ocultar spinner y limpiar formulario después de 3s
    setTimeout(() => {
      spinner.style.display = "none";
      exito.textContent = "";
      resetFormulario();
    }, 3000);
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
      // Recoger datos con FormData y mostrar por consola
      const datos = new FormData(objeto);
      //JSON.stringify, convierte el objto JSON a cadena
      console.log(
        `Datos enviados: ${JSON.stringify(Object.fromEntries(datos))}`
      );
      spinner.style.display = "block"; //poner visible el spinner
      exito.textContent = "Datos enviados";
    }
  });
};
    const habilitarSubmit = () => {
        valido = form.checkValidity() && validarRadios() && validarJornadas();
        //habilita o deshabilita el botón
        enviar.disabled = !valido;
    };


const resetForm = () => {
  form.reset(); //limpiar el formulario
};
const intentos = () => {
  aEnvios = JSON.parse(localStorage.getItem("nintentos")) || []; //si no hay cookie crea un array vacío
  const fechaHoy = new Date();
  const fecha = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
    timeStyle: "short",
    hour12: true,
  });

  const jornadas = {
    envios: 0,
    fechaLast: fecha.format(fechaHoy),
  };
  if (enviar) {
    jornadas.envios += 1;
    jornadas.fechaLast = fecha.format(fechaHoy);
  }
  return jornadas.envios;
};

init();
