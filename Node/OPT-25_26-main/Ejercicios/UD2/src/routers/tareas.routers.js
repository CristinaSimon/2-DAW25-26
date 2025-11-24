"use strict"
import { Router } from "express"
import { obtenerTareas, obtenerTareasPorId, crearTarea, actualizarTarea, completarTarea, eliminarTarea } from "../controllers/tareas.controller.js";

const router = Router();//Permite definir las rutas
router.get('/tareas', obtenerTareas);
router.get('/tareas/:id', obtenerTareasPorId);
router.post('/tareas', crearTarea);
router.put('/tareas/:id', actualizarTarea);
router.patch('/tareas/:id', completarTarea);
router.delete('/tareas/:id', eliminarTarea);

export {router as routerTareas};