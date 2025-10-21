"use strict"
class Musico{
    #nombreCompleto
    #instrumento
    #anioIngreso
    #conciertosRealizados
    constructor(nom,ins,anio,conRe){
        this.nombreCompleto=nom;
        this.instrumento=ins;
        this.anioIngreso=anio;
        this.conciertosRealizados=conRe;
    }
    get nombreCompleto(){
        return this.#nombreCompleto;
    }
    set nombreCompleto(value){
        if(!value || value.trim() ===""){
            return this.#nombreCompleto=value;
        }else{
            throw new Error("El nombre no puede estar vacío");
        }
    }
    get instrumento(){
        return this.#instrumento
    }
    set instrumento(value){
        value=value.toLowerCase();
        const aInstrumentos=["violin","viola","violonchelo","contrabajo","fauta","clarinete", "oboe", "trompeta","trombon","percusion"];
        if(aInstrumentos.some(ins=>ins===value)){
            return this.#instrumento=value;
        }else{
            throw new Error("El instrumento no es valido");

        }
    }
    get anioIngreso (){
        return this.#anioIngreso;
    }
    set anioIngreso (value){
        if(value>=1900 && value<=2025){
            return this.anioIngreso=value
        }else{
            throw new Error("El año de ingreso no es valido debe de estar entre 1900 y 2025");
        }
    }
    get conciertosRealizados (){
        return this.#conciertosRealizados;
    }
    set conciertosRealizados (value){
        if(value>=0){
            return this.conciertosRealizados
        }else{
            throw new Error("El numero de conciertos invalido, debe ser mayor o igual a 0");

        }
    }
    static toString(){
        return(`Musico ${this.nombreCompleto}, Instrumento: ${this.instrumento}, Año de Ingreso: ${this.anioIngreso}, Conciertos: ${this.conciertosRealizados} <br>`);
    }


}