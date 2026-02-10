import mongoose from "mongoose";
export const categorias = mongoose.model(
  "Categorias",
  new mongoose.Schema({
    id: {
      type: Number,
      require: true,
      maxlength: 5,
      minlength: 1,
    },
    nombre: {
      type: String,
      maxlength: 100,
      minlength: 10,
      require: true,
      trim: true,
    },
    descripcion: {
      type: String,
      maxlength: 300,
      minlength: 50,
      require: true,
      trim: true,
    }
  }),
);
