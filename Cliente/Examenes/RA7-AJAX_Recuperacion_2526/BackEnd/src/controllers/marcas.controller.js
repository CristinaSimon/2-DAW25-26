import { pool } from '../data/db.js';


export const getMarcasByCategory = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const [rows] = await pool.query(`
            SELECT DISTINCT m.id, m.nombre 
            FROM marcas m
            JOIN modelos mdl ON m.id = mdl.marca_id
            WHERE mdl.categoria_id = ?
        `, [categoria_id]);
        res.status(200).json({data:rows});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener marcas', error: error.message });
    }
};
