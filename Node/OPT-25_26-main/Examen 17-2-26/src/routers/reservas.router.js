import { Router } from 'express';
import { addReserva, delReserva, listAllReser, listReserHab, updateReserva } from '../controllers/reservas.controller';

const router = Router(); //permite definir rutas de manera modular y separada del archivo principal

router.post('/reservas', addReserva);
router.get('/reservas',listAllReser);
router.get('/reservas',listReserHab);
router.put('/reservas/:id',updateReserva);
router.delete('/reservas/:id', delReserva);

export { router as reservaRoutes };

