import { Router } from 'express';
import { getCategorias } from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', getCategorias);

export { router as categoriasRoutes };
