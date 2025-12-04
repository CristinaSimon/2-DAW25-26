import { Router } from "express";
import { getReservas, getReserva, addReservas,updateReservas, patchReservas,detReservas } from '../controler/reservas.controler.js';

const router = Router();

router.get("/reservas/nueva", "Metodo para ver una reserva");//Metodo para ver una reserva
router.get("/reservas","metodo para ver las reservas");//metodo para ver las reservas
router.post("/reservas","metodo para añadir reservas");//metodo para añadir reservas
router.put("/reservas","metodo para actualizar las reservas");//metodo para actualizar las reservas
router.patch("/reservas","metodo para modificar las reservas");//metodo para modificar las resrvas
router.delete("/reservas","metodo para borrar las reservas");//metodo para borrar las reservas



export {router as routerReservas};