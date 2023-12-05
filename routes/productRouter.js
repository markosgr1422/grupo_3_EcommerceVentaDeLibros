const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/create', productController.getCreate);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.get('/:id/edit', productController.getEditProduct);
router.put('/:id', productController.editProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;