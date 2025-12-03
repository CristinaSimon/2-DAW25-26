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
  const papelera = document.querySelector("#trashZone");
  let cont = 0;

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      creaBtn();
      btnCrear.addEventListener("click", crearObje);
      btnClear.addEventListener("click", borrarObje);
      papelera.addEventListener("dragover", overDrag);
      papelera.addEventListener("drop", drop);
    });
  };
  /**
   * @function creaBtn
   * @description Funcion para crear los botones
   */
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
  /**
   * @function crearObje
   * @description Funcion para crear los objetos
   */

  const crearObje = () => {
    const tam = paneltamano.querySelector(".selected");
    const color = panelcolor.querySelector(".selected");
    const seleColor = color.classList[0];
    const seleTam = tam.value;
    const forma = document.createElement("div");
    forma.classList.add(seleColor, seleTam, "game-element");
    cont++;
    contador.textContent = cont;
    areaJuego.append(forma);
    forma.setAttribute("draggable", true);
    forma.setAttribute("id", cont);
    alePosicion(forma);
    if (cont > 0) {
      msnEmty.classList.add("none");
    }
    forma.addEventListener("dragstart", startDrag);
    forma.addEventListener("dragend", endDrag);
  };
  /**
   * @function borrarObje
   * @description Funcion para limpiar la fona de todos los hijos
   */

  const borrarObje = () => {
    const elements = areaJuego.children;
    if (cont !== 0) {
      msnEmty.classList.remove("none");
      console.log(elements);
      const aEles = [...elements];
      aEles.forEach((e) => {
        const hijosElimi = e.classList.length;
        console.log(hijosElimi);
        if (hijosElimi > 1) {
          e.remove();
        }
      });
      cont = 0;
      contador.textContent = cont;
    } else {
      console.log("No hay objetos a borrar");
    }
  };
  /**
   * @function cambiarSelectSice
   * @description Funcion para cambiar el selector del tamaño
   */

  const cambiarSelectSice = (e) => {
    const ante = paneltamano.querySelector(".selected");
    console.log(ante);
    if (ante) {
      ante.classList.remove("selected");
    }

    e.target.classList.add("selected");
  };
  /**
   * @function cambiarSelectColor
   * @description Funcion para cambiar el selector del color
   */

  const cambiarSelectColor = (e) => {
    const ante = panelcolor.querySelector(".selected");
    if (ante) {
      ante.classList.remove("selected");
    }

    e.target.classList.add("selected");
  };
  const alePosicion = (obj) => {
    const anchoTotal = areaJuego.offsetWidth - obj.offsetWidth / 2;
    const altoTotal = areaJuego.offsetHeight - obj.offsetHeight / 2;
    const altEle =
      Math.round(Math.random() * altoTotal - 1) -
      obj.offsetHeight / 2 +
      obj.offsetWidth / 2;
    const ancEle =
      Math.round(Math.random() * anchoTotal - 1) -
      obj.offsetWidth / 2 +
      obj.offsetHeight / 2;
    obj.style.top = `${altEle}px`;
    obj.style.left = `${ancEle}px`;

    console.log((obj.style.top = `${altEle}px`));
    console.log((obj.style.left = `${ancEle}px`));
  };
  const startDrag = (e) => {
    const draggElement = e.target;
    e.dataTransfer.setData("text/plain", draggElement.getAttribute("id")); //guardando el id del objeto
    e.target.classList.add("dragging"); //añadimos la clase dragging al objeto arrastrado
  };
  const endDrag = (e) => {
    e.target.classList.remove("dragging");
  };
  const overDrag = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    const zona = e.target.querySelector("#trashZone"); //el contenedor  soltado
    const id = e.dataTransfer.getData("text/plain"); //extraemos el contenido de dataTransfer
    console.log(id);
    console.log(`este es el id: ${id}`);

    [...areaJuego.children].forEach(e=>{
      if(e.id==id){
        console.log(`este es el e: ${e}`);
        id.remove();
      }
    })
  };
  // const eliObjPapelera = (e) => {
  //   e.preventDefault();
  //   const elemeElimi=document.querySelector(".game-element").target;
  //   console.log(elemeElimi);
  //   cont--;
  //   contador.textContent = cont;
  // };
  return {
    init,
  };
})();
juegoformas.init();
