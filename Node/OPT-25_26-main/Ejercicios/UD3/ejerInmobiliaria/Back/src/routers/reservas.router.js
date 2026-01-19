"use strict"
import { Router } from 'express';


const router =Router();
//obtener todas las zonas
router.get('api/reservas/');
//obtener una reservas por id
router.get('api/reservas/:idreserva');
//obtener reserva de un inmueble
router.get('api/reservas/inmueble/:idinmueble');
//Obtener reservas de un cliente (por DNI)
router.get('api/reservas/dni/:dni');
//crear una nueva reservas
router.post('api/reservas/');
//actualizar una reservas completa
router.put('api/reservas/:idreserva');
//eliminar una reservas
router.delete('api/reservas/:idreserva');

export {router as zonasRouter}