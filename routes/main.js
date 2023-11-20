const express = require('express')

const controllers = require('../controllers/mainController')

const router = express.Router()

router.get('/', controllers.home)
router.get('/carrito', controllers.carrito)
router.get('/login', controllers.login)
router.get('/product', controllers.product)
router.get('/register', controllers.register)

module.exports = router
