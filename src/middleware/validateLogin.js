const { body } = require('express-validator');

const validateLogin = [
    body('email').notEmpty().isEmail().withMessage('Ingrese un email válido.'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña.'),
    
]

module.exports = validateLogin