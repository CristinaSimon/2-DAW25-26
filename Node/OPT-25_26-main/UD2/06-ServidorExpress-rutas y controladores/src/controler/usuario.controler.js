"use strict";
import { usuarios } from "../data/usuarios.js";

export const getUsuarios = (req,  res) => {
  return res.status(200).json({
    data: usuarios,
    total: usuarios.length,
  });
};
export const getUsuario = (req,  res) => {
  console.log(req.params);
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      message: "el id debe ser numerico",
    });
  }
  // busqueda del id del usuario
  const indice = usuarios.findIndex((usuario) => usuario.id == id);
  if (indice == -1) {
    return res.status(400).json({
      message: `el id ${id} no encontrado`,
    });
  }
  //si todo es correcto
  return res.status(200).json({
    data: usuarios.at(indice),
  });
};
//POST - Crear un usuario
export const addUsuarios = (req,  res) => {
  console.log(req.body);
  const { id, nombre, email, edad } = req.body;
  if (
    id.length == 0 ||
    nombre.length == 0 ||
    email.length == 0 ||
    edad.length == 0
  ) {
    return res.status(400).json({
      message: "los campos no pueden estar vacios",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      message: "el id debe ser numerico",
    });
  }
  const emailExist = usuarios.find((user) => user.email == email);
  if (emailExist) {
    return res.status(400).json({
      message: "Ya exiiste un usuario con ese email",
    });
  } else {
    usuarios.push(req.body);

    return res.status(201).json({
      message: `El usuario con ID ${id} ha sido grabado`,
    });
  }
};
export const updateUsuarios = (req,  res) => {};
export const patchUsuarios = (req,  res) => {};
export const detUsuarios = (req,  res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      message: "el id debe ser numerico",
    });
  }
  // busqueda del id del usuario
  const indice = usuarios.findIndex((usuario) => usuario.id == id);
  if (indice == -1) {
    return res.status(400).json({
      message: `el id ${id} no encontrado`,
    });
  } else {
    //si todo es correcto
    usuarios.splice(indice, 1);

    return res.status(200).json({
      message: "usuario a sido eliminado",
    });
  }
};
