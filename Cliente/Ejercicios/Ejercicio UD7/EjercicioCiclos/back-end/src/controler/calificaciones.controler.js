"use strict";
import { pool } from "../data/db.js";

export const addCalificaciones=async (req, res)=>{
  try {
    const { idCurso, idAlumno, idModulo, calificacion } = req.body;
    console.log(req.params);
    if (!idCurso || !idAlumno|| !idModulo|| !calificacion) {
      return res.status(400).json({ message: `idCurso, idAlumno, idModulo o calificacion son requeridos` })
    }
    const [result] = await pool.query("INSERT INTO calificaciones (idCurso, idAlumno, idModulo, calificacion) VALUES (?,?,?,?)", 
        [idCurso, idAlumno, idModulo, calificacion]);
    console.log(result);
    res.status(201).json({ message: 'La calificaion a sido grabada' });
  } catch (error) {
    res.status(500).json({ message: `Error al obtener los cursos ${error.message}` });
  }

}