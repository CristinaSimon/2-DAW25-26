"use strict";
export const validarFormulario = () => {
  const validar = new JustValidate("#frmUsuario", {
    errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
    errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
    focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
    validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
  });

  validar
    // Nombre
    .addField("#nameUser", [
      { rule: "required", errorMessage: "El nombre es obligatorio" },
      { rule: "minLength", value: 3, errorMessage: "Minimo tres caracteres" },
      { rule: "maxLength", value: 25, errorMessage: "Maximo 25 caracteres" },
      { rule: "customRegexp", value: /^[a-zá-ú\sñ/i]+$/i },
    ])
    // Email
    .addField("#emailUser", [
      { rule: "required", errorMessage: "El email es obligatorio" },
      { rule: "email", errorMessage: "el email es obligatorio" },
    ])

    // Rol
    .addField("#roleUser", [
      { rule: "required", errorMessage: "El rol es obligatorio" },
    ])
    // Password
    .addField("#passUser", [
      
    ])

    .onSuccess((e) => {
      e.preventDefault();
      // Recoger datos del formulario en un objeto linetral
    });
};
const grabarUser = async (usuario) => {};

const updateUser = async (usuario) => {};
