import { Router } from 'express';
import { getMarcasByCategory } from '../controllers/marcas.controller.js';

const router = Router();

router.get('/marcas/categoria/:categoria_id', getMarcasByCategory);

export { router as marcasRoutes };
