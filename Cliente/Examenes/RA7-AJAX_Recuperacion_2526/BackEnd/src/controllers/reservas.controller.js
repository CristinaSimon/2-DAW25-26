import { pool } from '../data/db.js';


export const createReserva = async (req, res) => {
  
    try {
        
        const { cliente_dni, vehiculo_id, fecha_inicio, fecha_fin, total, observaciones } = req.body;

        const [result] = await pool.query(
            'INSERT INTO reservas (cliente_dni, vehiculo_id, fecha_inicio, fecha_fin, total, observaciones) VALUES (?, ?, ?, ?, ?, ?)',
            [cliente_dni, vehiculo_id, fecha_inicio, fecha_fin, total, observaciones]
        );

       await pool.query(
            'UPDATE vehiculos SET disponible = 0 WHERE id = ?',
            [vehiculo_id]
        );
        res.status(201).json({ message: 'Reserva realizada con éxito', id: result.insertId });
    } catch (error) {
        
        res.status(500).json({ message: 'Error al crear reserva', error: error.message });
    }
};

export const getReservasByCliente = async (req, res) => {
    try {
        const { dni } = req.params;
        const [rows] = await pool.query(
            `SELECT r.*, m.nombre as modelo, ma.nombre as marca 
             FROM reservas r 
             JOIN vehiculos v ON r.vehiculo_id = v.id 
             JOIN modelos m ON v.modelo_id = m.id
             JOIN marcas ma ON m.marca_id = ma.id
             WHERE r.cliente_dni = ?`,
            [dni]
        );
        res.status(200).json({data:rows});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener reservas', error: error.message });
    }
};
