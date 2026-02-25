import { body, param, validationResult } from 'express-validator';

// Middleware reutilizable para manejar errores
const validationErrors = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ 
            errors: errores.array() 
        });
    }
    next();
};
export const validarHabitacion = [
    param('numero')
        .notEmpty().withMessage("El numero es requerido"),
    validationErrors //No lleva paréntesis porque Express necesita la función en sí, no el resultado de ejecutarla. Express la ejecutará más tarde cuando llegue una petición.
];
export const validarId = [
    param('id')
        .notEmpty().withMessage("El id es requerido"),
    validationErrors //No lleva paréntesis porque Express necesita la función en sí, no el resultado de ejecutarla. Express la ejecutará más tarde cuando llegue una petición.
];


// Validación completa para POST y PUT
export const validar = [
    body('numero')
        .trim()
        .notEmpty().withMessage("El numero de habitacion requerido"),
    validationErrors,
    body('tipo')
        .trim()
        .notEmpty().withMessage("El tipo de habitacion requerido"),
    validationErrors,
    body('precio')
        .trim()
        .notEmpty().withMessage("El numero de habitacion requerido")
        .isLength({ min: 1, max: 4 }).withMessage("El precio minimo es de 0€"),
    validationErrors,
    body('numero')
        .trim()
        .notEmpty().withMessage("El numero de habitacion requerido"),
    validationErrors
];

