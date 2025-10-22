"use strict"
import { Musico } from './musico.js';

export class BandaSinfonica {
    #musicos;
    #nombre;

    constructor(nom) {
        if (BandaSinfonica.instance) return BandaSinfonica.instance;
        this.#musicos = [];
        this.#nombre = nom;
        BandaSinfonica.instance = this;
    }

    get nombre() { return this.#nombre; }
    set nombre(value) {
        this.#nombre = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    addMusico(musico) {
        if (musico instanceof Musico) {
            this.#musicos.push(musico);
            console.log(`El músico ${musico.nombreCompleto} ha sido añadido.`);
        } else {
            console.log(`Error: No es un objeto Músico válido.`);
        }
    }

    buscarPorNombre(nombre) {
        return this.#musicos.filter(m => m.nombreCompleto.toLowerCase().includes(nombre.toLowerCase()));
    }

    filtrarInstrumento(instr) {
        return this.#musicos.filter(m => m.instrumento === instr.toLowerCase());
    }

    mejoresNMusicos() {
        return [...this.#musicos].sort((a, b) => b.conciertosRealizados - a.conciertosRealizados).slice(0, 1);
    }

    totalConciertos() {
        return this.#musicos.reduce((acc, m) => acc + m.conciertosRealizados, 0);
    }

    mostrarTodos() {
        return this.#musicos.map(m => m.toString()).join("");
    }
}
