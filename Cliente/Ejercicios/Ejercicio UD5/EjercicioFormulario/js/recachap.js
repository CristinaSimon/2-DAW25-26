"use strict"
  /**
   * 
   * @description generar token
   */
  export const validarCapcha = () => {
    return new Promise((res, rej) => {
      //verificar que el scrip se capcha este cargado
      if (typeof grecaptcha === "undefined") {
        rej("el capcha no esta cargado correctamente ");
      }
      e.preventDefault();
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LdxxGsqAAAAAFD-owms1klCAhmO8605ma8aWGQX", { action: "submit" })
          .then(function (token) {
            // Add your logic to submit to your backend server here.
            console.log(`Token generado ${token}`);
            res(token);
          })
          .catch((error) => {
            console.log(`Error ejecutando el recacha ${error}`);
            rej(`No se puede validar recachap`);
          });
      });
    });
  };