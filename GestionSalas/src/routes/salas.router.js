import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getSalas, getSala, addSalas,updateSalas, patchSalas,detSalas } from '../controler/usuario.controler.js';

const router = Router();

router.get("/sala/nueva", "metodos para añadir una nueva sala");
router.get("/sala","metodo para ver las sala");
router.post("/sala","metodo para añadir sala");
router.put("/sala","metodo para actualizar las sala");
router.patch("/sala","metodo para modificar las sala");
router.delete("/sala","metodo para borrar las sala");



export {router as routerSalas};