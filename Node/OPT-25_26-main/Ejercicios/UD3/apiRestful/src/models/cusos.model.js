import mongoose from "mongoose";
export const cursos = mongoose.model(
  "Cursos",
  new mongoose.Schema({
    id: {
      type: ObjectId,
      require: true,
      maxlength: 5,
      minlength: 1,
    },
    titulo: {
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
    },
    precio:{

    },
    categoryId: {
        type: ObjectId,
        reference: categorias.model.Schema
    }
  }),
);
