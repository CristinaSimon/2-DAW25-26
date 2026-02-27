import { pool } from '../data/db.js';



export const getClienteByCodigo = async (req, res) => {
    try {
        const { codigo } = req.params;  
        const [rows] = await pool.query('SELECT * FROM clientes WHERE codigo_socio = ?', [codigo]);
        if (rows.length === 0) return res.status(404).json({ message: 'Código de socio no encontrado' });
        res.status(200).json({data:rows[0]});
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar por código', error: error.message });
    }
};
