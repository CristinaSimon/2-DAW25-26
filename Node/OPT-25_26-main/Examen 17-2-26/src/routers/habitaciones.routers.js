import { Router } from 'express';
import { addHabitaciones, actualizarHabitacion, getHabitaciones, habitaDisponibles, buscarHabitacion, eliminarHabitacion, actualizarHabitacion} from '../controllers/habitaciones.controllers.js'

const router = Router(); //permite definir rutas de manera modular y separada del archivo principal

router.post('/habitaciones', addHabitaciones);
router.get('/habitaciones', getHabitaciones);
router.get('/habitaciones',habitaDisponibles);
router.get('/habitaciones',buscarHabitacion);
router.put('/habitaciones/:id', actualizarHabitacion);
router.delete('habitaciones/:id', eliminarHabitacion);

export {router as habitacionesRouter}
