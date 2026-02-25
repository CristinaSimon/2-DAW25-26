import { Reservas } from "../models/reservas.model.js";
import { Habitaciones } from "../models/habitaciones.model.js";
import { enviarEmailConfirmacion } from "../mailer.js";

export const addReserva = async (req, res) => {
  try {
    const habitacion = await Habitaciones.find(numero);
    if (!habitacion) {
      return res.status(404).json({ message: "La habitacion no existe" });
    }
    const { cliente, email, fechaEntrada, fechaSalida, habitacionId } =
      req.body;

    if (fechaSalida < fechaEntrada) {
      return res.status(404).json({ message: "Las fechas son incorrectas" });
    }
    const newReserva = await Reservas.create({
      cliente,
      email,
      habitacion,
      tipo,
      precio,
      fechaEntrada,
      fechaSalida
    });
    enviarEmailConfirmacion

    res.status(201).json({ _id: newReserva._id });
  } catch (error) {
    res.status(500).json({
      message: "Error al insertar la reserva",
      error: error.message,
    });
  }
};
export const listAllReser = async (req, res) => {
  try {
    const reservas = await reservas.find();
    console.log(reservas);
    res.status(200).json({ data: reservas.length ? reservas : [] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener habitaciones", error: error.message });
  }
};
export const listReserHab = async (req, res) => {
  try {
    const resservaHab = await Reservas.find((Habitaciones.numero));
    res
      .status(200)
      .json({ data: resservaHab.length ? resservaHab : [] });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener habitaciones disponibles",
      error: error.message,
    });
  }
};
export const updateReserva = async (req, res) => {
try {
    const { id } = req.params;
    const { cliente, email, fechaEntrada, fechaSalida, habitacionId } = req.body;

    const existHab = await Habitaciones.findById(id);
    if (!existHab) {
      return res.status(400).json({
        message: `La habitacion ${id} con numero ${numero} no existe`,
      });
    }
    const reserva = await Reservas.findByIdAndUpdate(
      { _id: id },
      { cliente, email, fechaEntrada, fechaSalida, habitacionId },
      { new: true, runValidators: true }, //devolver documento actualizado y aplica validaciones.
    );
    if (!reserva) {
      return res.status(404).json({ message: "La habitacion no existe" });
    }
        res.status(200).json({ message: `Reserva actualizada ${reserva._id}  `});

  } catch (error) {
        res.status(500).json({
      message: `Error al actualizar reserva  ${_id} `,
      error: error.message,
    });

  }};
export const delReserva = async (req, res) => {
  try {
    const { id } = req.params;

    const existHab = await Habitaciones.findById(id);
    if (!existHab) {
      return res.status(400).json({
        message: `La habitacion ${id} con numero ${numero} no existe`,
      });
    }
    const reserva = await Reservas.findByIdAndDelete(id);
    if (!reserva) {
      return res.status(404).json({ message: "La reserva no existe" });
    }
        res.status(200).json({ message: `reserva borrada `});

  } catch (error) {
        res.status(500).json({
      message: `Error al borrar reserva `,
      error: error.message,
    });

  }
};
