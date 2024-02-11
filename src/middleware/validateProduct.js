const {body}= require("express-validator");
const { validationResult } = require('express-validator');

const validateProduct = [
    body('titulo').notEmpty().isLength({ min: 5 }).withMessage('Debe contener 5 caracteres como mínimo').bail(),
    body('descripcion').isLength({ min: 20 }).withMessage('Debe contener 20 caracteres como mínimo'),
    body('image').custom((value, { req }) => {
        if (!value) {
            return true;
        }
        const allowedTypes = ['jpg', 'jpeg', 'gif', 'png'];
        const extension = value.split('.').pop().toLowerCase();
        if (!allowedTypes.includes(extension)) {
            throw new Error('La imagen debe estar en formato jpg, jpeg, gif o png');
        }
        return true;
    })
]
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = validate