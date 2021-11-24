var express = require('express');
var router = express.Router();
var users = require('../controllers/users.controller')
const { verifyToken } = require('../controllers/auth.controller');

/* GET users listing. */
router.get('/getAllUsers', verifyToken, users.getAllUsers);

module.exports = router;
