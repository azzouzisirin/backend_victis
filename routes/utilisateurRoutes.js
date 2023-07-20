const {  Register,Login } = require('../controllers/utilisateurController');
const express = require('express');
const router = express.Router();

router.route('/register').post(Register);
router.route('/login').post(Login);
module.exports = router;