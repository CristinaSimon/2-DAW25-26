import { Router } from "express";
import { bd } from "../bbdd/bbdd.js";
import { getActividades, getActividad, addActividades, updateActividades, patchActividades, delActividades } from '../controler/actividades.controler.js';

const router = Router();

router.get("/actividades/nueva", getActividades);
router.get("/actividades", getActividad);
router.post("/actividades", addActividades);
router.put("/actividades", updateActividades);
router.patch("/actividades", patchActividades);
router.delete("/actividades", delActividades);



export { router as routerActividades };