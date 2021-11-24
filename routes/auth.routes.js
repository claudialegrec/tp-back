const express = require('express');
const router = express.Router();

const{
    getJwtToken, verifyToken
} = require('../controllers/auth.controller')

router.post('/signIn', getJwtToken);

router.get('/checkToken', verifyToken);

module.exports = router;