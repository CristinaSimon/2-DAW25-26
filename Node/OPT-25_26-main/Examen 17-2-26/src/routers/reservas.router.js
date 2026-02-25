import { Router } from 'express';
import { addReserva, delReserva, listAllReser, listReserHab, updateReserva } from '../controllers/reservas.controller.js';
import { validarId, validar } from '../validators/reservas.validator.js';

const router = Router(); //permite definir rutas de manera modular y separada del archivo principal

router.post('/reservas',validar, addReserva);
router.get('/reservas', listAllReser);
router.get('/reservas',validarId,listReserHab);
router.put('/reservas/:id',validar, updateReserva);
router.delete('/reservas/:id', delReserva);

export { router as reservaRoutes };

