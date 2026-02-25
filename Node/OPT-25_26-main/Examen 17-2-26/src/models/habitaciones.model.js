import mongoose from "mongoose";

export const Habitaciones = mongoose.model(
  "Habitaciones",
  new mongoose.Schema(
    {
      numero: {
        type: Number,
        required: [true, "El numero de habitacion es requerido"],
        unique: [true, "No puede ser repetido"],
      },

      tipo: {
        type: String,
        enum: {
          values: ["Individual", "Doble", "Suite"],
          message:
            "La habitacion debe ser: Individual, Doble o Suite, no admitida otra opcion",
        },
        required: [true, "El tipo de habitación es requerido"],
      },

      precio: {
        type: Number,
        required: [true, "el precio es requerido"],
        minlength: [1, "El precio minimo es de 0€"],
      },

      disponible: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: false,
      collection: "habitaciones",
      versionKey: false,
    },
  ),
);
