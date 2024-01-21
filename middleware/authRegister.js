const {body}= require("express-validator")

const authRegister = [

    body("name")
    .notEmpty()
    .withMessage("Debes completar el campo")
    .bail(),

    body("apellido")
    .notEmpty()
    .withMessage('Debes completar el campo').bail(),

    body("email")
    .notEmpty()
    .withMessage('Debes completar el email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido').bail(),
    
    body('password')
    .notEmpty().withMessage('Tienes que escribir una contraseña').bail()

]

module.exports = authRegister