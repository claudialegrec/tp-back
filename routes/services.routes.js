var express = require('express');
const { verifyToken } = require('../controllers/auth.controller');
var router = express.Router();
var services = require('../controllers/services.controller')

router.get('/showAllServices', services.showAllServices);

router.post('/addNewService',  services.addNewService);

router.post('/updateService', services.updateService);

router.post('/deleteService', services.deleteService);

module.exports = router