var express = require('express');
var router = express.Router();

var citas = require('../controllers/citas.controller');
const { verifyToken } = require('../controllers/auth.controller');

router.get('/showAllCitas', citas.showAllCitas);

router.post('/addNewAppointment', citas.addNewAppointment);



module.exports = router