"use strict"
import { Router } from 'express';
import { getInmueble, getInmuebles, getInmZona, buscarPrecio, addInmueble, putInmueble, patchInmueble, delInmueble } from '../controllers/inmuebles.controller.js';




//obtener  todos los inmuebles
const router = Router(); //permite definir rutas de manera modular y separada del archivo principal

// GET - Obtener todos los alumnos
router.get('/inmuebles', getInmuebles);
//obtener inmueble por zona especifica
router.get('/inmuebles/zona/:zona', getInmZona);
//obtener inmueble por id
router.get('/inmuebles/:idinmueble', getInmueble);
//bucar inmueble por zona y rango de precio
router.get('/inmuebles/buscar', buscarPrecio);
//crear un nuevo inmueble
router.post('/inmuebles', addInmueble);
//Actualizar un inmueble completo
router.put('/inmuebles/:idinmueble', putInmueble);
//actulizar parcialmete un inmuueble
router.patch('/inmuebles/:idinmueble', patchInmueble);
//eliminar un inmueble
router.delete('/inmuebles/:idinmueble', delInmueble);

export { router as inmueblesRoutes };