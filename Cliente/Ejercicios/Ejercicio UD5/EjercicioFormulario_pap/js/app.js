"use strict"
import { nacimiento, usuario, contrasena } from "./expReg.js"
import { validarCapcha } from "./recachap.js"
let form, nombre, fnac, usu, radios, pass, list,rpass;
const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
        establecerObjetos();
        establecerEventos();
    })
}
const establecerObjetos = () => {
    form = document.querySelector("#registro");
    nombre = document.querySelector("#nombre");
    fnac = document.querySelector("#nacimiento");
    usu = document.querySelector("#usuario");
    radios = document.querySelectorAll(".radios");
    pass = document.querySelector("#pass");
    rpass = document.querySelector("#rpass");
    list = document.querySelector("#listReq");



}
const establecerEventos = () => {
    nombre.addEventListener("blur", validarNombre);
    fnac.addEventListener("input", validarFecNac);
    usu.addEventListener("input", validarUsu);
    radios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            validarRadios(e);
        });
    });
    pass.addEventListener("input", validarPass)
    rpass.addEventListener("input", validarRPass)
    pass.addEventListener("focus", listRequi);
}
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
}
const validarPass = (e) => {
    const errPass = document.querySelector("#errPass")
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
        : "Debe tener al menos un carácter especial (!@#~$%€&¬()=?¿¡<>çÇ{})";

    // Espacios
    document.querySelector("#espacio").textContent = contrasena.espacio.test(val)
        ? ""
        : "No debe contener espacios";

    // Mensaje general
    errPass.textContent = val === "" ? "El campo es requerido" : "";
}
const validarRPass=()=>{
    const errRPass=document.querySelector("#errRPass")
    if(pass.value===rpass.value){
        errRPass.textContent=""
    }else if(rpass.validity.valueMissing){
        errRPass.textContent="Campo requerido"
    }else{
        errRPass.textContent="Las contraseñas no son iguales"
    }
}



init();
