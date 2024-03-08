const express = require('express')
const userAPIController = require('../../controllers/api/userAPIController')

const router = express.Router()

router.get('/', userAPIController.list)
router.get('/:id', userAPIController.detail)

module.exports = router