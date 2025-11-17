"use strict"
import {Router} from 'express'

const router = Router(); // permitir definir las rutas
router.get('/usuarios', (req, res)=>{
    res.send('obteniendo usuarios')
});
router.post('/usuarios', (req, res)=>{
    res.send('Creando usuarios')
});
router.put('/usuarios', (req, res)=>{
    res.send('actualizand total un usuario')
});
router.patch('/usuarios', (req, res)=>{
    res.send('actualizand parcialmente un usuario')
});
router.delete('/usuarios', (req, res)=>{
    res.send('borrando un usuario')
});

export {router as routerUsuarios};