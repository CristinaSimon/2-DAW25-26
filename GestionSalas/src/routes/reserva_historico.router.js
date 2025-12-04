import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getHistoricos, getHistorico, addHistoricos,updateHistoricos, patchHistoricos,detHistoricos } from '../controler/reserva_historico.controler.js';
const router = Router();

router.get("/historico/nuevo", "metodos para añadir un nuevo historico");
router.get("/historico","metodo para ver las historico");
router.post("/historico","metodo para añadir historico");
router.put("/historico","metodo para actualizar las historico");
router.patch("/historico","metodo para modificar las historico");
router.delete("/historico","metodo para el historico");



export {router as routerHistorico};