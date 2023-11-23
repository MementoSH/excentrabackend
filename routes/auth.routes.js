const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/auth.controller')

router.post('/auth/signUp', AuthController.signUp)
router.post('/auth/signIn', AuthController.signIn)

module.exports = router;
