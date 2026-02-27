"use strict";
 const validadFormulario = (() => {
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
    });
  };
   const validarCliente = () => {
    const validar = new JustValidate("#formAlquiler", {
      errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
      errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
      focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
      validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
    });
    validar
      .addFiel(
        "#codigo_socio"[
          ({
            rule: "required",
            errorMessage: "el código de socio es obligatorio",
          },
          {
            rule: "customRegexp",
            value: /^PRM-[A-ZÑ]{2}[0-9]{4}-[A-ZÑ]{2}/,
            errorMessage:
              "El fomato debe ser PRM-XX9999-XX, cualquier otro formato sera invalido",
          })
        ],
      )
      .onSuccess((e) => {
        e.preventDefault();
      });
  };

  const validarFecha = () => {
    const validarInicio = new JustValidate("#fechaInicio", {
      errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
      errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
      focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
      validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
    });
    validarInicio.addFiel("#fechaInicio", [
      { rule: "required", errorMessage: "La fecha de inicio es Obligatoria" },
    ]);

    const validarFinal = new JustValidate("#fechaFin", {
      errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
      errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
      focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
      validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
    });
    validarFinal.addFiel("#fechaFin", [
      { rule: "required", errorMessage: "La fecha de Fin es Obligatoria" },
      { rule: 'custom', validator:(value)=>{
        validarInicio.value>value
    }, errorMessage: 'la fecha de fin no puede ser mayor que la fecha de inicio'
    }
    ]);
  };

  return { 
    init,
    validarCliente,
    validarFecha
   };
})();
validadFormulario.init();
