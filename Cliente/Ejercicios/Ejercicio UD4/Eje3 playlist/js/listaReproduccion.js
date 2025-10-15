"use strict"
import { Cancion } from "./cancion.js"; //Exporta la clase cancion del scrip que la contiene

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

  /**Getter y Setter */
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
  /**Metodos  */

  /**
   * Metodo para aladir una cancion a la lista de reproducción
   * @param {cancion} cancion 
   */
  anadirCancion(cancion) {
    if (!(cancion instanceof Cancion)) {
      throw new Error("El objeto debe ser una instancia de Cancion.");
    }
    this.#canciones.push(cancion);
  }
/**
 * Metodo para dar me gusta a la cancion deseada
 */
  darMeGusta() {
    this.#canciones.forEach(cancion => cancion.darMeGusta());
  }
/**
 * Metodo para obtener las canciones premium
 * @returns {array} devuelve el array de canciones premium
 */
  obtenerCancionesPremium() {
    return this.#canciones.filter(cancion => cancion.esPremium);
  }

  /**
   * Metodo para ordenar canciones
   */
  ordenarCanciones() {
    this.#canciones.sort((a, b) => b.numMeGusta - a.numMeGusta);
  }

  /**
   * Metodo para devolver las primeras tres canciones 
   * @returns 
   */
  obtenerPrimerasCanciones() {
    return this.#canciones.slice(0, 3);
  }

  /**
   * Metodo paar retornar una lista y las canciones que la componen
   * @returns {string} Retorna un texto con el nomnre la lista y las canciones que la componen
   */
  toString() {
    const cancionesStr = this.#canciones.map(cancion => cancion.toString()).join(", ");
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
