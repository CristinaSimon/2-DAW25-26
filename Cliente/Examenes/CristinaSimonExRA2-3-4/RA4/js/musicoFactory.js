"use strict"
import {Musico} from './musico.js';
class MusicoFactory{
    static crearMusico =(nom,ins,anio,conRe)=>{
        return new Musico(nom,ins,anio,conRe)
    }
}