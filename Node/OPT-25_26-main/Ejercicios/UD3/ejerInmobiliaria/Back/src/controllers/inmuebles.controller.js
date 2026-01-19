"use strict"
import { pool } from '../data/db.js'

/**
 * @function getInmuebles
 * @description Obtener todos los inmuebles
 * @param {*} req 
 * @param {*} res 
 */
export const getInmuebles = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM inmuebles");
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener inmuebles ${error.message}` });
    }
};
/**
 * @function getInmueble
 * @description obtener un inmueble por la ID
 * @param {*} req 
 * @param {*} res 
 */
export const getInmueble = async (req, res) => {
    try {
        const { idinmueble } = req.params
        const [result] = await pool.query("SELECT * FROM inmuebles where idinmueble=?", [idinmueble]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener el inmueble con id ${error.message}` });
    }

}
/**
 * @function getInmZona
 * @description obtener inmuebles de una zona especifica
 * @param {*} req 
 * @param {*} res 
 */
export const getInmZona = async (req, res) => {
    try {
        const { zona } = req.params
        const [result] = await pool.query("SELECT * FROM inmuebles where zona=? ", [zona]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al obtener inmuebles ${error.message}` });
    }

}

/**
 * @function buscarPrecio
 * @description Buscar Inmuebles por zona y rango de precio
 * @param {*} req 
 * @param {*} res 
 */
export const buscarPrecio = async (req, res) => {
    try {
        const { zona, premin, premax } = req.params
        const [result] = await pool.query("SELECT * FROM inmuebles where zona=? and precio>=? or precio<=?", [zona, premin, premax]);
        console.log(result);
        res.status(200).json({ data: result })
    } catch (error) {
        res
            .status(500)
            .json({ message: `Error al realizar la busquedas ${error.message}` });
    }

}

/**
 * @function addInmueble
 * @description Crear un nuevo inmueble completo
 * @param {*} req 
 * @param {*} res 
 */
export const addInmueble = async (req, res) => {

    try {
        const { zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("INSERT INTO inmuebles(zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado) VALUES (?,?,?,?,?,?,?,?)", [zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al insertar el inmueble ${error.message}` })
    }

}

/**
 * @function putInmueble
 * @description Actualizar un inmueble completo 
 * @param {*} req 
 * @param {*} res 
 */
export const putInmueble = async (req, res) => {
    try {
        const { zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("UPDATE inmuebles SET zona=?, tipo_inmueble=?, domicilio=?, habitaciones=?, banos=?, metros_cuadrados=?, precio=?, reservado=?", [zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al modificar el inmueble ${error.message}` })
    }

}

/**
 * @function patchInmueble
 * @description Actualizar un inmueble parcialmente
 * @param {*} req 
 * @param {*} res 
 */
export const patchInmueble = async (req, res) => {
    try {
        const { zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("UPDATE inmuebles SET zona=?, tipo_inmueble=?, domicilio=?, habitaciones=?, banos=?, metros_cuadrados=?, precio=?, reservado=?", [zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado])
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(500).json({ messsage: `Error al modificar el inmueble ${error.message}` })
    }

}

/**
 * @function delInmueble
 * @description Eliminar un inmueble
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
                message: 'El inmueble ha sido borrado'
            })
        }
    } catch (error) {
        res.status(500).json(
            { message: "Error al borrar el inmueble", error: error.message }
        )
    }

}



