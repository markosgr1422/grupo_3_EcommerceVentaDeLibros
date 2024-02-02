const express = require('express');

const controllers = require('../controllers/userController');

const authRegister= require("../middleware/authRegister")
const router = express.Router();

// ruta Login
router.get('/login', controllers.login);
router.post('/login', controllers.loginProcess);

// ruta Register
router.get('/register', controllers.register);
router.post('/register',authRegister,controllers.userRegister)

module.exports = router;