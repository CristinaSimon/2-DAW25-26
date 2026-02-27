import { Router } from 'express';
import { getClienteByCodigo } from '../controllers/clientes.controller.js';

const router = Router();


router.get('/cliente/codigo/:codigo', getClienteByCodigo);

export { router as clientesRoutes };
