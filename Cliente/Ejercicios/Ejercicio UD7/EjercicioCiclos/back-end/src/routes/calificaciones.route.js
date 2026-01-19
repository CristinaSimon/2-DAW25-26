"use strict"
import{ Router } from 'express'
import { addCalificaciones} from '../controler/calificaciones.controler.js';

const router = Router(); // permitir definir las rutas
router.post('/calificaciones', addCalificaciones);

export {router as routerCalificaciones};