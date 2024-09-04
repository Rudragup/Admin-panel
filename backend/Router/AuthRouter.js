const { signup, login } = require('../controller/Authcontroller');
const { signupValidation, loginValidation } = require('../Middleware/AuthValdation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;