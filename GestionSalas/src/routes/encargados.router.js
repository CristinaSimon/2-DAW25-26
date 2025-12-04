import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getEncargados, getEncargado, addEncargados,updateEncargados, patchEncargados,detEncargados } from '../controler/encargados.controler.js';

const router = Router();

router.get("/encargado/nuevo", "metodos para añadir una nueva encargado");
router.get("/encargado","metodo para ver las encargado");
router.post("/encargado","metodo para añadir encargado");
router.put("/encargado","metodo para actualizar las encargado");
router.patch("/encargado","metodo para modificar las encargado");
router.delete("/encargado","metodo para borrar las encargado");



export {router as routerEncargados};