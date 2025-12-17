"use strict";
const AJAXFetch = (() => {
  let mensaje, spinner;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer los elementos mensajes, spinner
      mensaje = document.querySelector("#mensaje");
      spinner = document.querySelector("#spinner");
      //establecer los elementos a los botones
      document.querySelector("#get").addEventListener("click", mostarGet);
      document.querySelector("#post").addEventListener("click", mostarPost);
      //ocultar el spinner 
      spinner.classList.add("ocultar");
    });
  };

  const mostarGet = async() => {
    await mostarSpinner();
    fetch("./data/Ejemplo1.php?valor=GET&nombre=Ana")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la comunicación ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        mensaje.textContent=data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const mostarPost = async () => {
    await mostarSpinner();
    fetch("./data/Ejemplo1.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'valor=POST&nombre=Luis'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la comunicación ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        mensaje.textContent=data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const mostarSpinner=()=>{
    mensaje.textContent="";//limpiar
    return new Promise((res, rej) => {
        spinner.classList.remove("ocultar")
        setTimeout(()=>{
            spinner.classList.add("ocultar");
            res(true);
        },2000)
        
    })
  }
  return {
    init,
  };
})();

AJAXFetch.init();