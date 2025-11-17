"use strict"
import {Router} from 'express'
import { getUsuarios, getUsuario, addUsuarios,updateUsuarios, patchUsuarios,detUsuarios } from '../controler/usuario.controler.js';

const router = Router(); // permitir definir las rutas
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.post('/usuarios', addUsuarios);
router.put('/usuarios/:id', updateUsuarios);
router.patch('/usuarios/:id', patchUsuarios);
router.delete('/usuarios/:id', detUsuarios);

export {router as routerUsuarios};