import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getSalas, getSala, addSalas, updateSalas, patchSalas, delSalas } from '../controler/usuario.controler.js';

const router = Router();

router.get("/sala/nueva", getSalas);
router.get("/sala", getSala);
router.post("/sala", addSalas);
router.put("/sala", updateSalas);
router.patch("/sala", patchSalas);
router.delete("/sala", delSalas);



export { router as routerSalas };