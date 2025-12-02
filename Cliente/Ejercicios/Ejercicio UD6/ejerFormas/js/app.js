"use strict";
import { colors, sizes } from "./btnconten.js";
const juegoformas = (() => {
  /**
   * declaracion de Constantes referenciadas al html
   */
  const panelcolor = document.querySelector("#colorSelector");
  const paneltamano = document.querySelector("#sizeSelector");
  const btnCrear = document.querySelector("#createBtn");
  const btnClear = document.querySelector("#clearBtn");
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      creaBtn();
      btnCrear.addEventListener("click", crearObje);
    });
  };

  const creaBtn = () => {
    colors.forEach((color) => {
      const btn = document.createElement("button");
      btn.setAttribute("name", color.name);
      btn.classList.add(color.class);
      btn.textContent = `${color.name}`;
      btn.classList.add("color-btn");
      btn.addEventListener("click", cambiarSelectColor);
      panelcolor.append(btn);
    });
    //
    panelcolor.children[0].classList.add("selected");

    sizes.forEach((tamano) => {
      const btn = document.createElement("button");
      btn.setAttribute("name", tamano.name);
      btn.setAttribute("value", tamano.value);
      btn.textContent = `${tamano.name}`;
      btn.addEventListener("click", cambiarSelectSice);
      btn.classList.add("size-btn");
      paneltamano.append(btn);
    });

    paneltamano.children[1].classList.add("selected");
  };
  const crearObje = () => {};
  const cambiarSelectSice=(e)=>{
    const ante=panelcolor.children.classList.contains("selected");
    if(ante){
        ante.classList.remove("selected");
    }
    
    e.target.classList.add("selected");
  }
  const cambiarSelectColor=()=>{}

  return {
    init,
  };
})();
juegoformas.init();
