import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getActividades, getActividad, addActividades,updateActividades, patchActividades,detActividades } from '../controler/actividades.controler.js';

const router = Router();

router.get("/actividades/nueva", "metodos para añadir una nueva activiadad");
router.get("/actividades","metodo para ver las actividades");
router.post("/actividades","metodo para añadir actividades");
router.put("/actividades","metodo para actualizar las actividades");
router.patch("/actividades","metodo para modificar las actividades");
router.delete("/actividades","metodo para borrar las actividades");



export {router as routerActividades};