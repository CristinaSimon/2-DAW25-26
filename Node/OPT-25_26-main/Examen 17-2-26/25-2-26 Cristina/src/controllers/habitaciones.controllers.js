import { Habitaciones } from "../models/habitaciones.model.js";

export const addHabitaciones = async (req, res) => {
  try {
    const { numero, tipo, precio } = req.body;
    const numDispo = await Habitaciones.findOne({ numero });
    if (numDispo) {
      return res
        .status(400)
        .json({ message: `La habitacion ${numero} ya existe` });
    }

    const newHab = await Habitaciones.create({ numero, tipo, precio });
    res.status(201).json({ id: newHab._id });
  } catch (error) {
    res.status(500).json({
      message: "Error al insertar la habitacion",
      error: error.message,
    });
  }
};
export const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitaciones.find();
    res.status(200).json({ data: habitaciones.length ? habitaciones : [] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener habitaciones", error: error.message });
  }
};
export const habitaDisponibles = async (req, res) => {
  try {
    const habitacionesDispo = await Habitaciones.find((disponible = true));
    res
      .status(200)
      .json({ data: habitacionesDispo.length ? habitacionesDispo : [] });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener habitaciones disponibles",
      error: error.message,
    });
  }
};
export const buscarHabitacion = async (req, res) => {
  try {
    const habitacionNum = await Habitaciones.find(numero);
    res.status(200).json({ data: habitacionNum.length ? habitacionNum : [] });
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener habitacion numero ${numero} `,
      error: error.message,
    });
  }
};
export const actualizarHabitacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { numero, tipo, precio, disponible } = req.body;

    const existHab = await Habitaciones.findById(id);
    if (!existHab) {
      return res.status(400).json({
        message: `La habitacion ${id} con numero ${numero} no existe`,
      });
    }
    const habitacion = await Habitaciones.findByIdAndUpdate(
      { _id: id },
      { numero, tipo, precio, disponible },
      { new: true, runValidators: true }, //devolver documento actualizado y aplica validaciones.
    );
    if (!habitacion) {
      return res.status(404).json({ message: "La habitacion no existe" });
    }
        res.status(200).json({ message: `Habitacion actualizada ${habitacion._id}  `});

  } catch (error) {
        res.status(500).json({
      message: `Error al actualizar habitacion numero ${numero} `,
      error: error.message,
    });

  }
};
export const eliminarHabitacion = async (req, res) => {
  try {
    const { id } = req.params;

    const existHab = await Habitaciones.findById(id);
    if (!existHab) {
      return res.status(400).json({
        message: `La habitacion ${id} con numero ${numero} no existe`,
      });
    }
    const habitacion = await Habitaciones.findByIdAndDelete(id);
    if (!habitacion) {
      return res.status(404).json({ message: "La habitacion no existe" });
    }
        res.status(200).json({ message: `Habitacion borrada `});

  } catch (error) {
        res.status(500).json({
      message: `Error al borrar habitacion numero ${numero} `,
      error: error.message,
    });

  }
};
