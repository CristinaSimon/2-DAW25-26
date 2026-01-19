"use strict"
import { Router } from 'express';


const router =Router();
//obtener todas las zonas
router.get('api/zona/');
//obtener una zona por id
router.get('api/zona/:idzona');
//crear una nueva zona
router.post('api/zona/');
//actualizar una zona completa
router.put('api/zona/:idzona');
//actualizar parcialmente una zona 
router.patch('api/zona/:idzona');
//eliminar una zona
router.delete('api/zona/:idzona');

export {router as zonasRouter}