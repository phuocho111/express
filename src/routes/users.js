const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const validateToken = require('../app/middleware/validateTokenHandler');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/current', validateToken, userController.current);

module.exports = router;