"use strict"
import {Musico} from './musico.js';
import {MusicoFactory} from './musicoFactory.js';
import {BandaSinfonica} from './bandaSinfonica.js';

const banda=[]



const addMusicos=(nom,instrumento,anio,conciertos)=>{
    banda.push(nom,instrumento,anio,conciertos);
};
const mostrarMusicos=()=>{};

//Script
try {
    addMusicos("Lopez Gracia, Ana", "violin", 2015, 120);
    addMusicos("Perez Sanchez, Luis", "fauta", 2018, 95);
    addMusicos("Torres Romero, Marta", "trompeta", 2012, 160);
    addMusicos("Ruiz Día, Carlos", "percursion", 2016, 130);
    addMusicos("Gomez Ortega, Elena", "fauta", 2020, 80);
    addMusicos("Martinez Lopez, Marta", "clarinete", 2019, 100);
    mostrarMusicos();
} catch (error) {
    console.log(error);
}
document.writeln(`<h2>Mostrar los musicos que se llamen Marta</h2><br>`);
try {
    
} catch (error) {
    
}
document.writeln(`<h2>Mostrar los musicos que tocan la flauta</h2><br>`);
document.writeln(`<h2>Mostrar los musicos con mas conciertos</h2><br>`);
document.writeln(`<p>Mostrar la suma total de conciertosrealizados por la banda</p>`);