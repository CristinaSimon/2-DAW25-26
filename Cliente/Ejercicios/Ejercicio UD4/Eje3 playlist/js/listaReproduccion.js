"use strict"
import { Cancion } from "./cancion.js";

export class ListaReproduccion {
  static #instancias = new Map(); // Patrón Singleton

  #nombre;
  #canciones;

  constructor(nombre) {
    if (ListaReproduccion.#instancias.has(nombre)) {
      return ListaReproduccion.#instancias.get(nombre);
    }

    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre de la lista no puede estar vacío.");
    }

    this.#nombre = nombre;
    this.#canciones = [];
    ListaReproduccion.#instancias.set(nombre, this);
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("El nombre de la lista no puede estar vacío.");
    }
    this.#nombre = valor;
  }

  get canciones() {
    return this.#canciones;
  }

  anadirCancion(cancion) {
    if (!(cancion instanceof Cancion)) {
      throw new Error("El objeto debe ser una instancia de Cancion.");
    }
    this.#canciones.push(cancion);
  }

  darMeGusta() {
    this.#canciones.forEach(c => c.darMeGusta());
  }

  obtenerCancionesPremium() {
    return this.#canciones.filter(c => c.esPremium);
  }

  ordenarCanciones() {
    this.#canciones.sort((a, b) => b.numMeGusta - a.numMeGusta);
  }

  obtenerPrimerasCanciones() {
    return this.#canciones.slice(0, 3);
  }

  toString() {
    const cancionesStr = this.#canciones.map(c => c.toString()).join(", ");
    return `Lista: ${this.#nombre} | Canciones: ${cancionesStr}`;
  }

  // Método Singleton
  static obtenerInstancia(nombre) {
    if (!ListaReproduccion.#instancias.has(nombre)) {
      ListaReproduccion.#instancias.set(nombre, new ListaReproduccion(nombre));
    }
    return ListaReproduccion.#instancias.get(nombre);
  }
}
