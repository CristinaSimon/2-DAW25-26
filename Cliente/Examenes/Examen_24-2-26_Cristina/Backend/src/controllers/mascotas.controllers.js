import { pool } from "../data/db.js";

export const getMascotas = async (req, res) => {
    try {
        const [mascotas] = await pool.query('SELECT * FROM mascotas');
        res.status(200).json({ data: mascotas });
    } catch (error) {
        console.error('Error al obtener las mascotas:', error);
        res.status(500).json({ message: 'Error al obtener las mascotas' });
    }
};

export const getMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const [mascota] = await pool.query('SELECT * FROM mascotas WHERE id = ?', [id]);
       
        if (!mascota || mascota.length === 0)
            return res.status(404).json({ message: "Mascota no encontrada" });

        res.status(200).json({ data: mascota[0] });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la mascota", error: error.message });
    }
};

export const addMascota = async (req, res) => {
    try {
        const { nombre, especie, edad, precio, puntuacion } = req.body;
        const [result] = await pool.query(
            'INSERT INTO mascotas (nombre, especie, edad, precio, puntuacion) VALUES (?, ?, ?, ?, ?)',
            [nombre, especie, edad, precio, puntuacion || 5]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: "Error al insertar la mascota", error: error.message });
    }
};

export const updateMascota = async (req, res) => {
    const { id } = req.params;
    const { nombre, especie, edad, precio, puntuacion } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE mascotas SET nombre = ?, especie = ?, edad = ?, precio = ?, puntuacion = ? WHERE id = ?',
            [nombre, especie, edad, precio, puntuacion, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.status(200).json({ message: 'Mascota actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la mascota' });
    }
};

export const delMascota = async (req, res) => {
     const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM mascotas WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.status(200).json({ message: 'Mascota eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la mascota' });
    }
};
