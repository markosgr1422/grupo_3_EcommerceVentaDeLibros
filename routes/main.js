const express = require('express');

const controllers = require('../src/controllers/mainController');

const router = express.Router();


router.get('/', controllers.home);
router.get('/carrito', controllers.carrito);
router.get('/product', controllers.product);
router.get('/create', controllers.create);
router.get('/edit', controllers.edit);

module.exports = router;

