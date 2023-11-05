const express = require('express')
const { registerCtrl } = require('../controllers/authController')
const router = express.Router()

router.post('/register', registerCtrl)

module.exports = router;