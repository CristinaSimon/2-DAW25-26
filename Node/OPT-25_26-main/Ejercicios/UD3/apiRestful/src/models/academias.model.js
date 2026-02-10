import mongoose from "mongoose";

export const academias = mongoose.model(
  "Academias",
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
    direccion: {
      type: String,
      maxlength: 100,
      minlength: 10,
      require: true,
      trim: true,
    },
    cursos: {
      type: String,
      maxlength: 100,
      minlength: 10,
      require: true,
      trim: true,
      CursoSchema,
    },
  }),
);

const CursoSchema = new mongoose.Schema({
  cursoId: {
    type: mongoose.Schema.ObjectId,
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
    maxlength: 100,
    minlength: 10,
    require: true,
    trim: true,
  },
  precio: {
    type: Number,
    require: true,
    maxlength: 5,
    minlength: 2,
  },
});
