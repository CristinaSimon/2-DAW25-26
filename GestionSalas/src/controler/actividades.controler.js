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

export const getActividades = async (req, res) => {
const db = await abrirBD();
    try {
        const actividades = await db.all('SELECT * FROM reservas'); // aquí, si es "actividades", cambia la tabla
        res.status(200).json(actividades); // enviar datos al cliente
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    } };

export const getActividad = async (req, res) => {
     const db = await abrirBD();
    const { nombre } = req.query; // se recibe por query string: /api/actividades?nombre=Yoga
    try {
        if (!nombre) {
            return res.status(400).json({ error: 'Falta el parámetro nombre' });
        }

        const actividades = await db.all(
            'SELECT * FROM actividades WHERE nombre = ?', 
            [nombre]  // ⚡ parámetro seguro
        );

        res.status(200).json(actividades);
    } catch (err) {
        console.error('Error consultando la base de datos:', err);
        res.status(500).json({ error: 'Error consultando la base de datos' });
    } finally {
        await db.close();
    }
 };

export const addActividades =async (req, res) => { 
         const db = await abrirBD();
         try {
            
         } catch (error) {
            
         }

};

export const updateActividades = (req, res) => { };

export const patchActividades = (req, res) => { };

export const delActividades = (req, res) => { };
