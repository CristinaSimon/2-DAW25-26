import { Router } from 'express';
import { addHabitaciones, actualizarHabitacion, getHabitaciones, habitaDisponibles, buscarHabitacion, eliminarHabitacion} from '../controllers/habitaciones.controllers.js'
import { validar, validarHabitacion, validarId } from '../validators/habitaciones.validators.js';

const router = Router(); //permite definir rutas de manera modular y separada del archivo principal

router.post('/habitaciones', validar, addHabitaciones);
router.get('/habitaciones', validarHabitacion,getHabitaciones);
router.get('/habitaciones',validarHabitacion,habitaDisponibles);
router.get('/habitaciones/:id',validarId,buscarHabitacion);
router.put('/habitaciones/:id',validar, actualizarHabitacion);
router.delete('habitaciones/:id', validarId, eliminarHabitacion);

export {router as habitacionesRouter}
