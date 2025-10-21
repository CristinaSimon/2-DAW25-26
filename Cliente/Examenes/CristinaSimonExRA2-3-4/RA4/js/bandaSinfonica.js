"use strict"
class BandaSinfonica{
    #musicos;
    #nombre;
    constructor (nom){
        this.#musicos=[Musico];
        if(BandaSinfonica.instance){
            return BandaSinfonica.instance;
        }
        this.#nombre=nom
        BandaSinfonica.instance=this

    }
    get nombre (){
        return this.#nombre
    }
    set nombre(value){
        value=value.toLowerCase();
        value.charAt[0].toUpperCase()
        return this.#nombre=value;
    }
    static addMusico(musico){
        if(musico instanceof Musico){
            return MusicoFactory.crearMusico(nom,ins,anio,conRe)
            console.log(`El musico ${nom} ha sido añadido correctamente`);
        } 
        console.log(`El musico no a posiso añadirse`);
        
    };
    static filtrarInstrumento(){};
    static buscarPorNombre(){};
    static mejoresNMusicos(){};
    static totalConciertos(){};
}