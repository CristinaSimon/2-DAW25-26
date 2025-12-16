"use strict";
import { bd } from "../bbdd/bbdd.js";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abrir la base de datos
const abrirBD = async () => {
    const db = await open({
        filename: '../bbdd/bbdd.js', // ruta a tu archivo .db
        driver: sqlite3.Database
    });
    return db;
}

export const getReservas = async (req, res) => {
    await abrirBD();
    try {
        const reservas = await db.all('SELECT * FROM reservas;');
        res.status(200).json(reservas); // enviar datos al cliente
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    }

};
export const getReserva = async (req, res) => {
    await abrirBD();
    try {
        const reservas = await db.all('SELECT * FROM reservas WHERE fecha=?;');
        res.status(200).json(reservas); // enviar datos al cliente
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    }

};
export const addReservas = async (req, res) => {
    await abrirBD();
    try {
        const reservas = await db.all('INSERT INTO reservas (id_sala, id_actividad, id_encargado, fecha, turno, repetir_semana, fecha_fin_repeticion,dia_semana) VALUES(?,?,?,?,?,?,?,?)');
        res.status(200).json(reservas); // enviar datos al cliente
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    }
};

export const delReservas = (req, res) => { 
    
};
