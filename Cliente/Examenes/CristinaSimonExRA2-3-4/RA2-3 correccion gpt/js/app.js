"use strict"
"use strict";
// Analizador de frases secretas (archivo separado)
// Mantengo tus nombres y estilo. Abre una ventana y acumula resultados.

const formatoFecha = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short', hour12: true });
const fechaTemporal = (typeof Temporal !== 'undefined') ? Temporal.Now.zonedDateTimeISO('Europe/Madrid') : null;

// ventana global donde acumulamos resultados
let ventanaAnalisis = null;

function abrirVentanaAnalisis() {
  // si no existe o está cerrada la abrimos, si existe la reutilizamos
  if (!ventanaAnalisis || ventanaAnalisis.closed) {
    ventanaAnalisis = window.open("", "AnalisisFrases", "width=600,height=600,scrollbars=yes");
    // inicializamos la ventana con encabezado y un contenedor donde iremos añadiendo resultados
    ventanaAnalisis.document.body.innerHTML = `
      <h2>Ejercicio RA2-RA3</h2>
      <p>Fecha actual: ${fechaTemporal ? formatoFecha.format(new Date(fechaTemporal.epochMilliseconds)) : formatoFecha.format(new Date())}</p>
      <div id="resultados"></div>
      <hr>
      <button type="button" onclick="self.close()">Cerrar</button>
    `;
  }
  return ventanaAnalisis;
}

function analizarFrase(frase) {
  // normalizamos
  const texto = String(frase).toLowerCase();
  let consonantes = 0;
  let cPares = 0;
  let cImpares = 0;
  let lPares = 0;
  let lImpares = 0;

  for (let i = 0; i < texto.length; i++) {
    const ch = texto[i];
    // consideramos letras (incluimos ñ y vocales acentuadas)
    if (/[a-záéíóúüñ]/i.test(ch)) {
      // consonante si no es vocal
      if (!/[aeiouáéíóúü]/i.test(ch)) {
        consonantes++;
        if (i % 2 === 0) cPares++; else cImpares++;
      }
      if (i % 2 === 0) lPares++; else lImpares++;
    }
  }

  // devuelvo HTML (manteniendo idea de destacar con clase 'blod' que imitaba su tag)
  return `
    <div style="margin-bottom:0.6rem;">
      La frase secreta: <span class="blod">${escapeHtml(texto)}</span><br>
      El número de consonantes es: <span class="blod">${consonantes}</span><br>
      El número de consonantes en posición impar es: <span class="blod">${cImpares}</span><br>
      El número de consonantes en posición par es: <span class="blod">${cPares}</span><br>
      Letras pares e impares: <span class="blod">${(lPares === lImpares ? 'Son iguales' : 'No son iguales')}</span>
    </div>
  `;
}

// pequeña función para escapar texto antes de inyectarlo en HTML
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m];
  });
}

// estilo .blod se inyecta en la ventana que abre el ejercicio.
// (el estilo para la ventana principal no es estrictamente necesario pero lo dejo aquí para uniformidad)
(function injectGlobalStyle() {
  const style = document.createElement('style');
  style.innerHTML = `.blod{ font-weight: bold; }`;
  document.head.appendChild(style);
})();

// flujo principal: pedir frases en bucle y acumular en la ventana
(function mainLoop() {
  let continuar = true;
  while (continuar) {
    const frase = prompt("Introduce la frase secreta (máx 50 caracteres):", "");
    if (frase === null) { // usuario canceló
      break;
    }
    if (frase.trim() === "" || frase.length > 50) {
      alert("Error. La frase no puede estar vacía ni tener más de 50 caracteres.");
      // preguntamos de nuevo (sin terminar el ciclo)
      continue;
    }

    // preparar ventana y añadir análisis (acumulado)
    const win = abrirVentanaAnalisis();
    const resultadoHtml = analizarFrase(frase);
    // añadimos al contenedor de resultados (acumulación)
    const cont = win.document.getElementById("resultados");
    cont.innerHTML += resultadoHtml;

    // preguntar si quiere seguir
    continuar = confirm("¿Desea enviar otra frase?");
  }
})();
