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

// Validación de ID en parámetros de ruta
export const validarId = [
    param('id')
        .notEmpty().withMessage("El ID es requerido")
        .isInt().withMessage("El ID debe ser un número entero"),
    validationErrors
];

// Validación completa para POST y PUT
export const validarMascota = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio.')
        .isLength({ max: 100 }).withMessage('El nombre no puede superar 100 caracteres.')
        .trim(),

    body('especie')
        .notEmpty().withMessage('La especie es obligatoria.')
        .isLength({ max: 50 }).withMessage('La especie no puede superar 50 caracteres.')
        .trim(),

    body('edad')
        .notEmpty().withMessage('La edad es obligatoria.')
        .isInt({ min: 0, max: 100 }).withMessage('La edad debe ser un número entre 0 y 100.')
        .toInt(),

    body('precio')
        .notEmpty().withMessage('El precio es obligatorio.')
        .isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo.')
        .toFloat(),

    body('puntuacion')
        .optional()
        .isInt({ min: 1, max: 5 }).withMessage('La puntuación debe ser un número entre 1 y 5.')
        .toInt(),

    validationErrors,
];
