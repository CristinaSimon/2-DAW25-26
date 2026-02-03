"use strict";
export const validarPacie = () => {
  const validarPaciente = new JustValidate(".formPaciente", {
    errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
    errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
    focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
    validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
  });
  

  validarPaciente
    //Validar tarjeta sanitaria
    .addField("#tarjetaSanitaria", [
      { rule: "required", errorMessage: "Es necesario ingresar la tajeta" },
      { rule: "minLength", value: 12, errorMessage: "Mínimo 12 caracteres" },
      { rule: "maxLength", value: 20, errorMessage: "Máximo 20 caracteres" },
    ])
};
export const validarCita=()=>{
  const validCita = new JustValidate(".nuevaCita", {
    errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
    errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
    focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
    validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
  });
}
