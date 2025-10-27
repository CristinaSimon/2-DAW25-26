/**Requerimientos:

    HTML:

        Un  <div> de tamaño inicial 100x100 píxeles.

        Posición absoluta y un color de fondo inicial (por ejemplo, azul claro).

        Cursor de puntero al pasar sobre el cuadro.

    Eventos del ratón:

        Al hacer clic sobre el cuadro, su color de fondo debe cambiar a un color aleatorio.

    Eventos del teclado:

        Usando las flechas del teclado, el cuadro debe moverse en la dirección correspondiente:


        Cada movimiento incrementa o decrementa la posición en un valor fijo (por ejemplo, 10 píxeles).

    Restricciones:

        El cuadro no debe salirse de la ventana del navegador, ni por arriba, abajo, izquierda o derecha.

        Si se redimensiona la ventana, el cuadro debe ajustarse automáticamente para mantenerse visible.

 */
"use strict"
let cuadrado, 
    movimiento=10,
    x = window.innerWidth/ 2,
    y = window.innerHeight/ 2;


  /**
   * @description Inicializar eventos al cargar el DOM
   */

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
           cuadrado= document.querySelector('.cuadrado')
            cuadrado.addEventListener('click', cambioColor)
            cuadrado.style.left = `${x}px`;
            cuadrado.style.top = `${y}px`;
            window.addEventListener("keydown", moverCuadrado);
           cambioColor(); 

    });
  };

  const cambioColor=()=>{
    const colorHex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    cuadrado.style.backgroundColor =`#${colorHex}`;
}
const moverCuadrado = (e) => {
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;
  const anchoCuadrado = cuadrado.offsetWidth;
  const altoCuadrado = cuadrado.offsetHeight;

  // Mover según tecla presionada
  switch (e.key) {
    case "ArrowUp":
      if (y - movimiento >= 0) y -= movimiento;
      break;
    case "ArrowDown":
      if (y + movimiento + altoCuadrado <= altoVentana) y += movimiento;
      break;
    case "ArrowLeft":
      if (x - movimiento >= 0) x -= movimiento;
      break;
    case "ArrowRight":
      if (x + movimiento + anchoCuadrado <= anchoVentana) x += movimiento;
      break;
  }

  cuadrado.style.left = `${x}px`;
  cuadrado.style.top = `${y}px`;
};

window.addEventListener("resize", () => {
// Calcular cuánto se ha desplazado respecto al centro actual
  const dx = x - (window.innerWidth - cuadrado.offsetWidth) / 2;
  const dy = y - (window.innerHeight - cuadrado.offsetHeight) / 2;

  // Calcular nuevo centro
  const nuevoCentroX = (window.innerWidth - cuadrado.offsetWidth) / 2;
  const nuevoCentroY = (window.innerHeight - cuadrado.offsetHeight) / 2;

  // Aplicar desplazamiento relativo
  x = nuevoCentroX + dx;
  y = nuevoCentroY + dy;

   // 👇 Asegurar que sigue visible
  x = Math.max(0, Math.min(x, window.innerWidth - cuadrado.offsetWidth));
  y = Math.max(0, Math.min(y, window.innerHeight - cuadrado.offsetHeight));


  // Reposicionar el cuadrado
  cuadrado.style.left = `${x}px`;
  cuadrado.style.top = `${y}px`;
});




//script
init();

