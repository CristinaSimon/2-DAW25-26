"use strict";
let arr_Barcos = [], cliBarcos = 0, cliAgua = 0;
const tablero = document.querySelector("#juego");

export const titulo = () => {
  const titulo = document.createElement("h2");
  titulo.textContent = "Juego de barcos";
  tablero.append(titulo);
};
export const form = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "edad");
  input.setAttribute("placeholder", "introduce la edad");
  const btn = document.createElement("button");
  btn.setAttribute("value", "enviar");
  btn.setAttribute("id", "enviar");
  btn.textContent = "enviar";
  form.append(input, btn);
  tablero.append(form);
};
export const tabla = (nfc) => {
  const tabla = document.createElement("table");
  let idcelda = 1;
  aBarcos(nfc);

  for (let c = 0; c < nfc; c++) {
    const fila = document.createElement("tr");
    for (let f = 0; f < nfc; f++) {
      const cel = document.createElement("td");
      cel.setAttribute("id", idcelda);
      cel.addEventListener("click", mostrar);
      idcelda++;
      fila.append(cel);
    }
    tabla.append(fila);
  }
  tablero.append(tabla);
};
const aBarcos = (celdas) => {
  let max = parseInt(celdas) == 10 ? 100 : 25;
  let con = 0;

  while (con !== 5) {
    const numAle = Math.floor(Math.random() * max - 1 + 1) + 1;
    if (!arr_Barcos.includes(numAle)) {
      arr_Barcos.push(numAle);
      con++;
    }
  }
  console.log(arr_Barcos);
};
const mostrar = (e) => {
  const celda = e.target;

  console.log(arr_Barcos);
  if (arr_Barcos.includes(parseInt(celda.id))) {
    celda.classList.add("barco");
    cliBarcos++;
    console.log(`El numero de clicks correctos ${cliBarcos}`);
  } else {
    celda.classList.add("agua");
    cliAgua++;
  }
  if (cliBarcos == 5) {
    conClic(cliAgua, cliBarcos);
  }
};
const conClic = (ca, cb) => {
  const totalclick = ca + cb;

  if (cb == 5) {
    finMensaje(totalclick);
  }
};
const finMensaje = (tc) => {
  Swal.fire({
    title: `Juego finalizado. Has necesitado ${tc}`,
    text: "¿Quieres reiniciar el juego?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#a049e7ff",
    cancelButtonColor: "rgba(94, 92, 92, 1)",
    confirmButtonText: "Continuar",
  }).then((result) => {
    if (result.isConfirmed) {
        const tabla=document.querySelector("table");
        tabla.remove();
        const formm=document.querySelector("form");
        formm.classList.add("block");
        document.querySelector("input").value="";
        arr_Barcos = []
        cliBarcos=0
        cliAgua=0
      Swal.fire({
        icon: "success",
      });
    }
  });
};
