import { Router } from "express";
import { getMascotas, getMascota, addMascota, updateMascota, delMascota } from "../controllers/mascotas.controllers.js";
import { validarMascota, validarId } from "../validators/mascotas.validators.js";

const router = Router();

router.get("/mascotas", getMascotas);
router.get("/mascotas/:id", validarId, getMascota);
router.post("/mascotas", validarMascota, addMascota);
router.put("/mascotas/:id", validarId, validarMascota, updateMascota);
router.delete("/mascotas/:id", validarId, delMascota);

export default router;
