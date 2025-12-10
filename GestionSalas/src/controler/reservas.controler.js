"use strict";
import { bd } from "../bbdd/bbdd.js";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abrir la base de datos
async function abrirBD() {
    const db = await open({
        filename: '../bbdd/bbdd.js', // ruta a tu archivo .db
        driver: sqlite3.Database
    });
    return db;
}

export const getReservas = (req, res) => { };
export const getReserva = (req, res) => { };
export const addReservas = async(req, res) => {
const db = await abrirBD();
//No esta terminado
    try {
        const actividades = await db.all('INSERT INTO reservas (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, fecha_fin_repeticion,dia_semana) VALUES(?,?,?,?,?,?,?,?)'); 
        res.status(200).json(actividades); // enviar datos al cliente
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    } };

export const updateReservas = (req, res) => { };
export const patchReservas = (req, res) => { };
export const delReservas = (req, res) => { };
