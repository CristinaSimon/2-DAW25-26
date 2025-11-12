"use strict"
let form, nombre;
const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
        establecerObjetos();
        establecerEventos();
    })
}
const establecerObjetos = () => {
    form = document.querySelector("#registro");
    nombre = document.querySelector("#nombre")

}
const establecerEventos = () => {
    nombre.addEventListener("blur", cambionombre);
}
// ------------------ funciones

const cambionombre=()=>{
    nombre.value=`${nombre.value.toLocaleUpperCase()}`;
}

init();
