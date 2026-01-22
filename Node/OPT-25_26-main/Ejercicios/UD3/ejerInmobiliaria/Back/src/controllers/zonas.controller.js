"use strict"
import { pool } from '../data/db.js'

/**
 * @function getzonass
 * @description Obtener todos los zonass
 * @param {*} req 
 * @param {*} res 
 */
export const getzonass = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM zonass");
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener zonass ${error.message}` });
    }
};
/**
 * @function getzonas
 * @description obtener un zonas por la ID
 * @param {*} req 
 * @param {*} res 
 */
export const getzonas = async (req, res) => {
    try {
        const { idzonas } = req.params
        const [result] = await pool.query("SELECT * FROM zonass where idzonas=?", [idzonas]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener el zonas con id ${error.message}` });
    }

}
/**
 * @function getInmZona
 * @description obtener zonass de una zona especifica
 * @param {*} req 
 * @param {*} res 
 */
export const getInmZona = async (req, res) => {
    try {
        const { zona } = req.params
        const [result] = await pool.query("SELECT * FROM zonass where zona=? ", [zona]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener zonass ${error.message}` });
    }

}

/**
 * @function buscarPrecio
 * @description Buscar zonass por zona y rango de precio
 * @param {*} req 
 * @param {*} res 
 */
export const buscarPrecio = async (req, res) => {
    try {
        const { zona, premin, premax } = req.params
        const [result] = await pool.query("SELECT * FROM zonass where zona=? and precio>=? or precio<=?", [zona, premin, premax]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al realizar la busquedas ${error.message}` });
    }

}

/**
 * @function addzonas
 * @description Crear un nuevo zonas completo
 * @param {*} req 
 * @param {*} res 
 */
export const addzonas = async (req, res) => {

    try {
        const { zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("INSERT INTO zonass(zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado) VALUES (?,?,?,?,?,?,?,?)", [zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al insertar el zonas ${error.message}` })
    }

}

/**
 * @function putzonas
 * @description Actualizar un zonas completo 
 * @param {*} req 
 * @param {*} res 
 */
export const putzonas = async (req, res) => {
    try {
        const { zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("UPDATE zonass SET zona=?, tipo_zonas=?, domicilio=?, habitaciones=?, banos=?, metros_cuadrados=?, precio=?, reservado=?", [zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al modificar el zonas ${error.message}` })
    }

}

/**
 * @function patchzonas
 * @description Actualizar un zonas parcialmente
 * @param {*} req 
 * @param {*} res 
 */
export const patchzonas = async (req, res) => {
    try {
        const { zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("UPDATE zonass SET zona=?, tipo_zonas=?, domicilio=?, habitaciones=?, banos=?, metros_cuadrados=?, precio=?, reservado=?", [zona, tipo_zonas, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al modificar el zonas ${error.message}` })
    }

}

/**
 * @function delzonas
 * @description Eliminar un zonas
 * @param {*} req 
 * @param {*} res 
 */
export const delInmueble = async (req, res) => {
    try {
        console.log({ req });
        const { idinmueble } = req.params
        const [result] = await pool.query("DELETE FROM inmuebles WHERE idinmuebles=?", [id]);
        console.log('borrado', result);
        if (result.affectedRows == 0) {
            return res.status(400).json({
                message: 'El inmueble no existe'
            })
        } else {
            return res.status(200).json({
                message: 'El zonas ha sido borrado'
            })
        }
    } catch (error) {
        res.status(500).json(
            { message: "Error al borrar el zonas", error: error.message }
        )
    }

}



