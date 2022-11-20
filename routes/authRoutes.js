const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')



router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/cadastro', AuthController.cadastro)
router.post('/cadastro', AuthController.cadastroPost)
router.get('/logout', AuthController.logout)



module.exports = router