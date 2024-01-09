const express = require('express');

const controllers = require('../controllers/userController');

const router = express.Router();

router.get('/login', controllers.login);
router.post('/login', controllers.loginProcess);
router.get('/register', controllers.register);

module.exports = router;