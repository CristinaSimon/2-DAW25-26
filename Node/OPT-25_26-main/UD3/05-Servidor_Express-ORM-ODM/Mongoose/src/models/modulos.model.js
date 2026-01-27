import mongoose from "mongoose";

export const Modulos = mongoose.model(
  "Modulos",
  new mongoose.Schema(
    {
      idModulo: {
        type: String,
        required: true,
        trim: true, //quita espacios en blanco al principio y al final
        maxlength: 10,
        minlength: 2,
        unique: true,
      },
      descripcion: {
        type: String,
        required: true,
        trim: true, //quita espacios en blanco al principio y al final
        maxlength: 60,
        minlength: 15,
        unique: true
      },
      idCurso: {
        type: String,
        required: true,
        trim: true, //quita espacios en blanco al principio y al final
        maxlength: 10,
        minlength: 2,
        unique: false
      },
    },
    {
      timestamps: false,
      collection: "modulos",
      versionKey: false,
    },
  ),
);
