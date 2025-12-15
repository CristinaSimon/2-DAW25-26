"use strict"
import{ Router } from 'express'
import { getCursos } from '../controler/cursos.controler.js';

const router = Router(); // permitir definir las rutas
router.get('/cursos', getCursos);

export {router as routerCursos};