import { Router } from 'express';
import { getVehiculos } from '../controllers/vehiculos.controller.js';

const router = Router();

router.get('/vehiculos', getVehiculos);


export { router as vehiculosRoutes };
