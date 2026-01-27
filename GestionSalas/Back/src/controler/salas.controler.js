"use strict";
import { bd } from "../bbdd/bbdd.js";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const abrirBD = async () => {
    const db = await open({
        filename: '../bbdd/bbdd.js', // ruta a tu archivo .db
        driver: sqlite3.Database
    });
    return db;
}

export const getSalas = (req, res) => { 
    
};
export const getSala = (req, res) => { };
export const addSalas = (req, res) => { };
export const updateSalas = (req, res) => { };
export const patchSalas = (req, res) => { };
export const delSalas = (req, res) => { };
