"use strict"
export class Cancion {
  static #totalCanciones = 0;

  #titulo;
  #artista;
  #numMeGusta;
  #esPremium;

  constructor(titulo, artista) {
    this.titulo = titulo;
    this.artista = artista;
    this.#numMeGusta = 0;
    this.#esPremium = false;
    Cancion.#totalCanciones++;
  }

  // === Getters y Setters con validaciones ===
  get titulo() {
    return this.#titulo;
  }

  set titulo(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("El título debe ser una cadena no vacía.");
    }
    this.#titulo = valor;
  }

  get artista() {
    return this.#artista;
  }

  set artista(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("El artista debe ser una cadena no vacía.");
    }
    this.#artista = valor;
  }

  get numMeGusta() {
    return this.#numMeGusta;
  }

  set numMeGusta(valor) {
    if (typeof valor !== "number" || valor < 0) {
      throw new Error("El número de 'Me gusta' debe ser un número no negativo.");
    }
    this.#numMeGusta = valor;
  }

  get esPremium() {
    return this.#esPremium;
  }

  set esPremium(valor) {
    if (typeof valor !== "boolean") {
      throw new Error("El atributo 'esPremium' debe ser booleano.");
    }
    this.#esPremium = valor;
  }

  // === Métodos ===
  darMeGusta() {
    this.#numMeGusta++;
  }

  toString() {
    return `${this.#titulo} - ${this.#artista}`;
  }

  static obtenerTotalCanciones() {
    return Cancion.#totalCanciones;
  }
}

// === Subclase CancionPremium ===
export class CancionPremium extends Cancion {
  constructor(titulo, artista) {
    super(titulo, artista);
    this.esPremium = true;
  }

  toString() {
    return `${super.toString()} (Premium)`;
  }
}
