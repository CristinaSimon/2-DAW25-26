"use strict"
import{ Router } from 'express'
import { getModulos } from '../controler/moculos.controler.js';

const router = Router(); // permitir definir las rutas
router.get('/modulo/:idCurso', getModulos);

export {router as routerModulo};