const express = require('express');

const controllers = require('../controllers/mainController');

const router = express.Router();


router.get('/', controllers.home);
router.get('/carrito', controllers.carrito);
router.get('/login', controllers.login);
router.post('/login', controllers.loginProcess);
router.get('/product', controllers.product);
router.get('/register', controllers.register);
router.get('/create', controllers.create);
router.get('/edit', controllers.edit);

module.exports = router;

