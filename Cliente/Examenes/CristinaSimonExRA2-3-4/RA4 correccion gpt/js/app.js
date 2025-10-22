"use strict"
import { MusicoFactory } from './musicoFactory.js';
import { BandaSinfonica } from './bandaSinfonica.js';

const banda = new BandaSinfonica("Trassierra");

try {
    banda.addMusico(MusicoFactory.crearMusico("Lopez Gracia, Ana", "violin", 2015, 120));
    banda.addMusico(MusicoFactory.crearMusico("Perez Sanchez, Luis", "flauta", 2018, 95));
    banda.addMusico(MusicoFactory.crearMusico("Torres Romero, Marta", "trompeta", 2012, 160));
    banda.addMusico(MusicoFactory.crearMusico("Ruiz Díaz, Carlos", "percusion", 2016, 130));
    banda.addMusico(MusicoFactory.crearMusico("Gomez Ortega, Elena", "flauta", 2020, 80));
    banda.addMusico(MusicoFactory.crearMusico("Martinez Lopez, Marta", "clarinete", 2019, 100));

    document.body.innerHTML += `<h2>Músicos llamados Marta</h2>`;
    banda.buscarPorNombre("Marta").forEach(m => document.body.innerHTML += m.toString());

    document.body.innerHTML += `<h2>Músicos que tocan la flauta</h2>`;
    banda.filtrarInstrumento("flauta").forEach(m => document.body.innerHTML += m.toString());

    document.body.innerHTML += `<h2>Músico con más conciertos</h2>`;
    banda.mejoresNMusicos().forEach(m => document.body.innerHTML += m.toString());

    document.body.innerHTML += `<h2>Total de conciertos realizados por la banda</h2>`;
    document.body.innerHTML += `<p>${banda.totalConciertos()}</p>`;

} catch (error) {
    console.log(error);
}
