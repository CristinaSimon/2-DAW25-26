import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getEncargados, getEncargado, addEncargados, updateEncargados, patchEncargados, delEncargados } from '../controler/encargados.controler.js';

const router = Router();

router.get("/encargado/nuevo", getEncargados);
router.get("/encargado", getEncargado);
router.post("/encargado", addEncargados);
router.put("/encargado", updateEncargados);
router.patch("/encargado", patchEncargados);
router.delete("/encargado", delEncargados);



export { router as routerEncargados };