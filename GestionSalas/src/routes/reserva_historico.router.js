import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getHistoricos, getHistorico, addHistoricos, updateHistoricos, patchHistoricos, delHistoricos } from '../controler/reserva_historico.controler.js';
const router = Router();

router.get("/historico/nuevo", getHistoricos);
router.get("/historico", getHistorico);
router.post("/historico", addHistoricos);
router.put("/historico", updateHistoricos);
router.patch("/historico", patchHistoricos);
router.delete("/historico", delHistoricos);



export { router as routerHistorico };