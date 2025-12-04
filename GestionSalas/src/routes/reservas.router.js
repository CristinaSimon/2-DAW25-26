import { Router } from "express";
import { getReservas, getReserva, addReservas, updateReservas, patchReservas, delReservas } from '../controler/reservas.controler.js';

const router = Router();

router.get("/reservas/nueva", getReservas);//Metodo para ver una reserva
router.get("/reservas", getReserva);//metodo para ver las reservas
router.post("/reservas", addReservas);//metodo para añadir reservas
router.put("/reservas", updateReservas);//metodo para actualizar las reservas
router.patch("/reservas", patchReservas);//metodo para modificar las resrvas
router.delete("/reservas", delReservas);//metodo para borrar las reservas



export { router as routerReservas };