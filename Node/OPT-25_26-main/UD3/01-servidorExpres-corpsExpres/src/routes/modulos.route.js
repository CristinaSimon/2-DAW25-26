"use strict"
import{ Router } from 'express'
import { getModulos } from '../controler/modulos.controler.js';

const router = Router(); // permitir definir las rutas
router.get('/modulos/:idCurso', getModulos);

export {router as routerModulo};