import { pool } from '../data/db.js';


export const getVehiculos = async (req, res) => {
    try {
        const { marca_id, categoria_id } = req.query;
        let query = `
            SELECT v.*, m.nombre as modelo_nombre, m.imagen, ma.nombre as marca_nombre, c.nombre as categoria_nombre 
            FROM vehiculos v
            JOIN modelos m ON v.modelo_id = m.id
            JOIN marcas ma ON m.marca_id = ma.id
            JOIN categorias c ON m.categoria_id = c.id
            WHERE v.disponible = 1`;
        const params = [];

        if (marca_id) {
            query += ' AND m.marca_id = ?';
            params.push(marca_id);
        }
        if (categoria_id) {
            query += ' AND m.categoria_id = ?';
            params.push(categoria_id);
        }

        const [rows] = await pool.query(query, params);
        res.status(200).json({data:rows});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener vehículos', error: error.message });
    }
};

