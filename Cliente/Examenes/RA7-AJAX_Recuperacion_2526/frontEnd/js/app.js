"use strict";
// import { mostrarMensajes } from "./utils.js";
import { validarCliente } from "./validarform.js";
import { confTabulator } from "./confTabla.js";

const agenciaCoches = (() => {
  let btnValCliente, selVehiculos, categorias, marca;

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      btnValCliente = document
        .querySelector("#btnValidarCliente")
        .addEventListener("click", validarCliente);
      idntCliente();
    });
    selVehiculos = document.querySelector("#seccionFiltros");
    categorias = document
      .querySelector("#categoria")
      .addEventListener("change", iniReser);
    marca = document.querySelector("#marca");
  };

  const idntCliente = () => {
    if (btnValCliente) {
      cargarInfCliente();
    } else {
      document.querySelector(".alert-heading").textContent =
        "Cliente no encontrado";
    }
  };
  const cargarInfCliente = async () => {
    try {
      console.log(document.querySelector("#codigo_socio").value);
      const response = await fetch(
        `http://localhost:4000/api/cliente/codigo/${document.querySelector("#codigo_socio").value}`,
      );

      if (!response.ok) {
        throw new Error("Error en la comunicación: " + response.status);
      }
      const data = await response.json();
      document.querySelector(".alert-heading").textContent = data;
      document.querySelector("#seccionFiltros").classList.remove("ocultar");
      confTabulator(document.querySelector("#codigo_socio").value);
    } catch (error) {
      console.log(error);
    }
  };
  const iniReser = async () => {
    try {
      const categoria = await fetch("http://localhost:4000/api/categorias");
      if (!categoria.ok) {
        throw new Error("Error en la comunicación: " + response.status);
      }
      categoria.forEach((element) => {
        const opcion = document.createElement("option");
        opcion.getAttribute("id").textContent = element.id;
        opcion.getAttribute("value").textContent = element.nombre;
        categorias.append(opcion);
      });
      const marcas = await fetch(
        `http://localhost:4000/api/marcas/categoria/${categorias.selected.id}`,
      );
      marcas.forEach((element) => {
        const opcion = document.createElement("option");
        opcion.getAttribute("id").textContent = element.id;
        opcion.getAttribute("value").textContent = element.nombre;
        marca.append(opcion);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { init };
})();
agenciaCoches.init();
