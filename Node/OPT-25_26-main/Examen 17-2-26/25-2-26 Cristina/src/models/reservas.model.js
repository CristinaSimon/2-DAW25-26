import mongoose from "mongoose";
import { Habitaciones } from "./habitaciones.model.js";

export const Reservas = mongoose.model(
  "Reservas",
  new mongoose.Schema(
    {
      cliente: {
        type: String,
        required: [true, "Nombre de Cliente obligatorio"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [100, "El nombre debe tener como máximo 100 caracteres"],
        trim: true,
      },
      habitacion:{
        type: Number,
        required: true,
        ref: 'Habitaciones'
      },
      tipo:{
        type: String,
        required: true,
        ref: 'Habitaciones'
      },
      habitacion:{
        type: Number,
        required: true,
        ref: 'Habitaciones'
      },

      email: {
        type: String,
        required: [true, "El email es requerido"],
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Debe proporcionar un email válido"],
      },
      fechaEntrada: {
        type: Date,
        required: [true, 'Se requiere una fecha de entrada']
      },
      fechaSalida: {
        type: Date,
        required: [true, 'Se requiere una fecha de salida']
      },
      // habitacionId: {
      //   type: ObjectId(),
      //   ref: Habitaciones
      // },
    },
    {
      timestamps: false,
      collection: "reservas",
      versionKey: false,
    },
  ),
);
