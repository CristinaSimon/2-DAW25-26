"use strict";
const AJAXFetch = (() => {
  let spinner, mensaje, provincias;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer los elementos spinner
      mensaje = document.querySelector("#mensaje");
      provincias = document.querySelector("#provincias");

      mostrarProvincias();
    });
  };

  const mostrarProvincias = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json"
      );
      if (!response.ok) {
        throw new Error(`Error en la comunicación ${response.status}`);
      }
      const data = await response.json();
      data.sort((a, b) => a.nm.localeCompare(b.nm));
      data.forEach((element) => {
        const prov = document.createElement("option");
        prov.setAttribute("value", element.id);
        prov.textContent = element.nm;
        provincias.append(prov);
      });
      provincias.addEventListener("change",()=>{
        mensaje.classList.remove("ocultar");
        mensaje.textContent= `El id es ${provincias.value}`
      })
    } catch (error) {
      console.log(error);
    }
  };
  return {
    init,
  };
})();

AJAXFetch.init();
