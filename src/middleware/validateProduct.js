const { body, validationResult } = require('express-validator');

const validateProduct = [
    body('titulo', 'Título debe contener 5 caracteres como mínimo').notEmpty().isLength({ min: 5 }).withMessage(),
    body('descripcion').isLength({ min: 20 }).withMessage('Descripción debe contener 20 caracteres como mínimo'),
    body('image').custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Debes subir una imagen de portada');
        }
        // Verificar el formato de la imagen
        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedFormats.includes(req.file.mimetype)) {
          throw new Error('Solo se permiten imágenes en formato JPG, JPEG, PNG o GIF');
        }
        return true; // La validación pasa si es un formato de imagen válido
      })
]

module.exports = validateProduct