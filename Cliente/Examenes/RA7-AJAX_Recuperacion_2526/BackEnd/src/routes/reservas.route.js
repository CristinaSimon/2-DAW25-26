import { Router } from 'express';
import { createReserva, getReservasByCliente } from '../controllers/reservas.controller.js';

const router = Router();

router.post('/reservas', createReserva);
router.get('/reservas/cliente/:dni', getReservasByCliente);

export { router as reservasRoutes };
