import { Academias } from "../models/academias.model.js";

/**
 * @function addAcademia
 * @description metodo para crear academias
 *
 */
export const addAcademia = async (req, res) => {
  try {
    const { idAcademia, nombre, direccion } = req.body;
    const academiaExiste = await Academias.findOne({ idAcademia });
    if(academiaExiste){
        return res.status(400).json({ message: `La academia con el id ${idAcademia} ya esta registrada`})
    }

    const nuevaAcademia = await Academias.create({id:idAcademia, nombre, direccion})
    
} catch (error) {}
};
