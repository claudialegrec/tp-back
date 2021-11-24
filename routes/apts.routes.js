var express = require('express');
var router = express.Router();

var apts = require('../controllers/apts.controller');
const { verifyToken } = require('../controllers/auth.controller');

router.get('/showAllApts', apts.showAllApts);

router.post('/addNewAppointment', apts.addNewAppointment);



module.exports = router