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

export const delReservas = async (req, res) => { 
        await abrirBD();
    try {
        const insReserHis = await db.all('INSERT OR IGNORE INTO reservas_historico ( sala,actividad, encargado, fecha, turno, dia_semana) SELECT s.nombre,a.nombre, e.nombre, r.fecha, r.turno, r.dia_semana FROM reservas r JOIN salas s ON r.id_sala = s.id_sala LEFT JOIN actividades a ON r.id_actividad = a.id_actividad JOIN encargados e ON r.id_encargado = e.id_encargado;');
        const resetReservas= await db.all('DELETE FROM reservas')
        res.status(200).json(reservas); // enviar datos al cliente

    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    }

    
};
