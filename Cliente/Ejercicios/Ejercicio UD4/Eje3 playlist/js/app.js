"use strict"
import { Cancion, CancionPremium } from "./cancion.js";
import { ListaReproduccion } from "./listaReproduccion.js";

function anadirCanciones(lista) {
  try {
    lista.anadirCancion(new CancionPremium("First Light", "Yao Chen"));
    lista.anadirCancion(new CancionPremium("Lekko", "Marcin Starosta"));

    const c1 = new Cancion("A Long Goodbye", "The Magic Lantern");
    c1.numMeGusta = 1;
    lista.anadirCancion(c1);

    const c2 = new Cancion("Alt jeg", "Elise Lindahl");
    c2.numMeGusta = 2;
    lista.anadirCancion(c2);

    const c3 = new Cancion("De seu", "Mirta da Silva");
    c3.numMeGusta = 3;
    lista.anadirCancion(c3);

  } catch (error) {
    console.error("Error al añadir canciones:", error.message);
  }
}

function obtenerListaHTML(canciones) {
  return canciones.map(c => `
    <li>
      <div>
        <h3>Título: ${c.titulo}</h3>
        <p>Artista: ${c.artista}</p>
        <p>Número de "Me gusta": ${c.numMeGusta}</p>
        <p class="${c.esPremium ? 'premium' : ''}">
          Premium: ${c.esPremium ? "Sí" : "No"}
        </p>
      </div>
    </li>
  `).join("");
}

/** Cuerpo del Script***/

const lista = ListaReproduccion.obtenerInstancia("Wake Up Gently");
anadirCanciones(lista);

// Mostrar nombre de la lista
document.getElementById("nombre-lista").textContent = lista.nombre;

// Mostrar canciones originales
document.getElementById("canciones-originales").innerHTML = `<ul>${obtenerListaHTML(lista.canciones)}</ul>`;

// Mostrar solo canciones premium
document.getElementById("canciones-premium").innerHTML =`<ul>${obtenerListaHTML(lista.obtenerCancionesPremium())}</ul>`;

// Aumentar "Me gusta" a todas
lista.darMeGusta();
document.getElementById("canciones-aumento-megusta").innerHTML = `<ul>${obtenerListaHTML(lista.canciones)}</ul>`;

// Mostrar top 3 canciones con más "Me gusta"
lista.ordenarCanciones();
document.getElementById("canciones-mas-megusta").innerHTML =
  `<ul>${obtenerListaHTML(lista.obtenerPrimerasCanciones())}</ul>`;

// Mostrar total de canciones en consola
document.getElementById("numCanciones").innerHTML=`<p> ${Cancion.obtenerTotalCanciones()}</p>`;
