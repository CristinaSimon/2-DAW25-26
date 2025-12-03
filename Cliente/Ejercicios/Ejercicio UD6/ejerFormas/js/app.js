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
  const areaJuego = document.querySelector("#gameArea");
  const contador = document.querySelector("#counter");
  const msnEmty = document.querySelector("#emptyMessage");
  let cont = 0;

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      creaBtn();
      btnCrear.addEventListener("click", crearObje);
      btnClear.addEventListener("click", borrarObje)

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
  const crearObje = () => {
    const tam = paneltamano.querySelector(".selected");
    const color = panelcolor.querySelector(".selected");
    const seleColor = color.classList[0];
    const seleTam = tam.value;
    const forma = document.createElement("div");
    forma.classList.add(seleColor, seleTam);
    forma.setAttribute("dropable", "true");
    cont++;
    contador.textContent = cont;
    areaJuego.append(forma);
    if (cont > 0) {
      msnEmty.classList.add("none");
    }

  };
  const borrarObje = () => {
    const elements = areaJuego.children;
    if (cont !==0) {
      msnEmty.classList.remove("none");
      console.log(elements);
      const aEles = [...elements];
      aEles.forEach(e => {
        const hijosElimi = e.classList.length
        console.log(hijosElimi);
        if (hijosElimi > 1) {
          e.remove()
        }
      })
      cont = 0;
      contador.textContent=cont
    }else{
      console.log('No hay objetos a borrar');
    }

  };
  const cambiarSelectSice = (e) => {
    const ante = paneltamano.querySelector(".selected");
    console.log(ante);
    if (ante) {
      ante.classList.remove("selected");
    }

    e.target.classList.add("selected");
  };
  const cambiarSelectColor = (e) => {
    const ante = panelcolor.querySelector(".selected");
    if (ante) {
      ante.classList.remove("selected");
    }

    e.target.classList.add("selected");

  };

  return {
    init,
  };
})();
juegoformas.init();
