"use strict";
const Expresiones = (() => {
  let valor, mostrar;
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      document.querySelector("#formBusqueda").addEventListener("click", validar);
      valor = document.querySelector("#valor");
      mostrar = document.querySelector("#mostrar");
      //asignar al input el atributo pattern
      //asignar el atributo title
      valor.setAtribute("pattern", "^(?=.*[2468])(?!.*delete)[\\wá-úñ\\s]{8,20}$")
      valor.setAtribute("title", "Formato: Debe contener un numero par no debe contener la palabra Delete, longitud entre 8 y 22 caracteres ")
    });
  };

  const validar = (e) => {
    e.preventDefault();
    if (valor.validity.valid=""){
      mostrar.textContent="Dato Correcto"
    }else if(valor.validity.valueMissing){
      mostrar.textContent="Dato Incorrecto"
    }else if(valor.validity.patternMismatch){
      mostrar.textContent="Formato incorrecto"
    }
  };

  return { init };
})();

Expresiones.init();
