import mongoose from "mongoose"
{
password: hashed_password
}
export const usuario=mongoose.model('Usuarios', new mongoose.Schema({
    user:{
        type: String,
        require: true,
        trim: true,
        maxlength:50,
        minlength: 2
    },
    email:{
        type: String,
        require: true,
        trim: true
    },
    role: {
      type: String,
      enum: {
        values: ['Admin', 'Usuario'],
        message: 'El rol debe ser: Admin ó Usuario'
      },
      default: 'Usuario',
      required: true
    },
    password: {
      type: String,
      required: [true, 'La contraseña es requerida'],
      minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
      maxlength: [255]
    },

}))
