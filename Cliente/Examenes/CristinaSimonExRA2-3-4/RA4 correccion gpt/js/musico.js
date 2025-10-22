"use strict"
export class Musico {
    #nombreCompleto;
    #instrumento;
    #anioIngreso;
    #conciertosRealizados;

    constructor(nom, ins, anio, conRe) {
        this.nombreCompleto = nom;
        this.instrumento = ins;
        this.anioIngreso = anio;
        this.conciertosRealizados = conRe;
    }

    get nombreCompleto() { return this.#nombreCompleto; }
    set nombreCompleto(value) {
        if (value && value.trim() !== "") {
            this.#nombreCompleto = value;
        } else {
            throw new Error("El nombre no puede estar vacío");
        }
    }

    get instrumento() { return this.#instrumento; }
    set instrumento(value) {
        const validos = ["violin", "viola", "violonchelo", "contrabajo", "flauta", "clarinete", "oboe", "trompeta", "trombon", "percusion"];
        value = value.toLowerCase();
        if (validos.includes(value)) {
            this.#instrumento = value;
        } else {
            throw new Error("Instrumento no válido");
        }
    }

    get anioIngreso() { return this.#anioIngreso; }
    set anioIngreso(value) {
        if (value >= 1900 && value <= 2025) {
            this.#anioIngreso = value;
        } else {
            throw new Error("Año inválido");
        }
    }

    get conciertosRealizados() { return this.#conciertosRealizados; }
    set conciertosRealizados(value) {
        if (value >= 0) {
            this.#conciertosRealizados = value;
        } else {
            throw new Error("Conciertos inválidos");
        }
    }

    toString() {
        return `Músico: ${this.#nombreCompleto}, Instrumento: ${this.#instrumento}, Año: ${this.#anioIngreso}, Conciertos: ${this.#conciertosRealizados}<br>`;
    }
}
