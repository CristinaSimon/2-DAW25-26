"use strict";
import { pool } from "../data/db.js";

export const getModulos=async (req, res)=>{
  try {
    const {idCurso}=req.params;
    if(!idCurso){
        return res.status(400).json({message: `El id del curso debe incluirse en la ruta`})
    }
    const [result] = await pool.query("Select * from modulos where idCurso=? ", [idCurso]);
    // console.log(result);
    res.status(200).json({data:result});
  } catch (error) {
    res.status(500).json ({message: `Error al obtener los modulos ${error.message}`});
  }
}
