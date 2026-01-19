"use strict";
let modulos, cursos, btnCargar, curCarg;
const AJAXFetch = (() => {
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      modulos = document.querySelector("#modulos");
      cursos = document.querySelector("#cursos");
      btnCargar = document.querySelector("#cargar");
      mostrarCurso();
      cursos.addEventListener("change", mostrarModulos);

    });
  };
  const mostrarCurso = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cursos");
      if (!response.ok) {
        throw new Error(`Error en la comunicación ${response.status}`);
      }
      const datCurso = await response.json();
      datCurso.data.forEach(element => {
        const selCur = document.createElement("option");
        selCur.getAttribute("value", element.idCurso);
        selCur.textContent = `${element.idCurso}-${element.descripcion}`;
        cursos.append(selCur);
      });

    } catch (error) {
      console.log(error);
    }
  }

  const mostrarModulos = async (e) => {
    console.log(e.target.value);
    const mod = e.target.value.split("-")[0]
    const response = await fetch(`http://localhost:3000/api/modulos/1daws`);
    if (!response.ok) {
      throw new Error(`Error en la comunicación ${response.status}`);
    }
    const datMod = await response.json();
    datMod.forEach


  }

  return {
    init,
  };
})();

AJAXFetch.init();
