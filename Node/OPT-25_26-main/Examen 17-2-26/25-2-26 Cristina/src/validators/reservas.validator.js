import { body, param, validationResult } from "express-validator";

// Middleware reutilizable para manejar errores
const validationErrors = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      errors: errores.array(),
    });
  }
  next();
};
export const validarId = [
  param("id").notEmpty().withMessage("El id es requerido"),
  validationErrors, //No lleva paréntesis porque Express necesita la función en sí, no el resultado de ejecutarla. Express la ejecutará más tarde cuando llegue una petición.
];

// Validación completa para POST y PUT
export const validar = [
  body("cliente")
    .trim()
    .notEmpty()
    .withMessage("El nombre de cliente requerido")
    .isLength({ min: 3, max: 100 })
    .withMessage("El nombre debe tener al menos 3 caracteres y un max de 100"),
  validationErrors,
  body("habitacion")
    .trim()
    .notEmpty()
    .withMessage("el nº de habitacion es requerido"),
  body("tipo").trim().notEmpty().withMessage("El tipo de habitacion requerido"),
  body("precio")
    .trim()
    .notEmpty()
    .withMessage("El precio requerido")
    .isLength({ min: 1, max: 4 })
    .withMessage("El precio minimo es de 0€"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .matches(/^\S+@\S+\.\S+$/)
    .withMessage("Debe proporcionar un email válido"),
  body("fechaEntrada")
    .trim()
    .notEmpty()
    .withMessage("Se requiere una fecha de entrada"),
  body("fechaSalida")
    .trim()
    .notEmpty()
    .withMessage("Se requiere una fecha de salida")
    .custom(fechaEntrada=>
        fechaEntrada.value<fechaSalida.value
    ).withMessage("La fecha de Salida no puede ser anterior a la de entrada"),
  validationErrors,
];

