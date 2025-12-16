"use strict"
import{ Router } from 'express'
import { getAlumno} from '../controler/alumnos.controler.js';

const router = Router(); // permitir definir las rutas
router.get('/Alumnos/:idCurso', getAlumno);

export {router as routerAlumnos};