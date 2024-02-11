const { body, validationResult } = require('express-validator');

const validateProduct = [
    body('titulo').notEmpty().isLength({ min: 5 }).withMessage('Título debe contener 5 caracteres como mínimo').bail(),
    body('descripcion').isLength({ min: 20 }).withMessage('Descripción debe contener 20 caracteres como mínimo'),
    // body('image').custom((value) => {
    //     if (!value) {
    //         return true;
    //     }
    //     const allowedTypes = ['jpg', 'jpeg', 'gif', 'png'];
    //     const extension = value.split('.').pop().toLowerCase();
    //     if (!allowedTypes.includes(extension)) 
    //     {console.log('archivo no válido')
    //         throw new Error('La imagen debe estar en formato jpg, jpeg, gif o png');
    //     }
    //     console.log('archivo válido')
    //     return true;
    // })
]

module.exports = validateProduct